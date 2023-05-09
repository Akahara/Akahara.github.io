import { readFileSync, existsSync, writeFileSync, readdirSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';
import { convertMarkdownToHtml } from './markdown-to-html/index.js';
import { copyFile } from 'fs/promises';

const TEMPLATE_PATH = 'documentation_template.html';
const DOCUMENTATION_DIR_PATH = 'documentation_source';
const DOCUMENTATION_DIR_OUTPUT_PATH = 'documentation';
const EXCLUDED_PATHS = [ ".git", "courses" ];

const REMOVED_INDEX = join(DOCUMENTATION_DIR_OUTPUT_PATH, 'readme.html');

async function generateHtmlFiles() {
    const htmlTemplate = readFileSync(TEMPLATE_PATH).toString();
    const visitableMdPaths = [];
    const visitablePaths = [];
    await Promise.all(visit(DOCUMENTATION_DIR_PATH));
    console.log("visitableMdPaths", visitableMdPaths);
    visitableMdPaths.sort();
    visitablePaths.sort();

    // remove the readme.html file from the original documentation repository
    // because github.io pages give higher priority to readme.html than index.html
    visitableMdPaths.splice(visitableMdPaths.indexOf(REMOVED_INDEX), 1);
    rmSync(REMOVED_INDEX);

    writeFileSync(join(DOCUMENTATION_DIR_OUTPUT_PATH, 'index.html'), htmlTemplate
        .replace('TITLE', 'documentation index')
        .replace('CSS_PATH', '/documentation/index.css')
        .replace('CONTENT', `
            <h1>Documentation index</h1>
            Low effort was put in this page :)
            <h3>Readings</h3>
            <ul>
                ${visitableMdPaths.map(p => `<li><a href="/${p}">${p.replace(DOCUMENTATION_DIR_OUTPUT_PATH, '')}</a></li>`).join('\n')}
            </ul>
            <h3>Other files</h3>
            <ul>
                ${visitablePaths.map(p => `<li><a href="/${p}">${p.replace(DOCUMENTATION_DIR_OUTPUT_PATH, '')}</a></li>`).join('\n')}
            </ul>
        `));

    async function generateFile(parentDir, fileName) {
        let htmlFileName = fileName.substr(0, fileName.length-3) + '.html';
        let htmlFilePath = join(parentDir, htmlFileName);
        let outputFilePath = join(parentDir.replace(DOCUMENTATION_DIR_PATH, DOCUMENTATION_DIR_OUTPUT_PATH), htmlFileName);
        let outputParentDir = outputFilePath.replace(htmlFileName, '');
        if(existsSync(htmlFilePath)) {
            copyFile(htmlFilePath, outputFilePath);
            visitablePaths.push(outputFilePath);
            console.log("copied", outputFilePath);
            return;
        }
        let htmlBody = await convertMarkdownToHtml(readFileSync(join(parentDir, fileName)));
        let fullHtml = htmlTemplate
            .replace('TITLE', fileName)
            .replace('CSS_PATH', '/documentation/index.css')
            .replace('CONTENT', htmlBody);
        if(!existsSync(outputParentDir))
            mkdirSync(outputParentDir, { recursive: true });
        writeFileSync(outputFilePath, fullHtml);
        console.log("generated", outputFilePath);
        visitableMdPaths.push(outputFilePath);
    }

    function visit(dirpath) {
        let promises = [];
        for(let f of readdirSync(dirpath, { withFileTypes: true })) {
            if(EXCLUDED_PATHS.includes(f.name))
                continue;
            if(f.isDirectory())
                promises.push(...visit(join(dirpath, f.name)));
            else if(f.name.endsWith('.md'))
                promises.push(generateFile(dirpath, f.name));
            else {
                let dstParent = dirpath.replace(DOCUMENTATION_DIR_PATH, DOCUMENTATION_DIR_OUTPUT_PATH);
                let dstPath = join(dstParent, f.name);
                let srcPath = join(dirpath, f.name);
                console.log("copied", dstPath);
                if(!existsSync(dstParent))
                    mkdirSync(dstParent, { recursive: true });
                copyFile(srcPath, dstPath);
                visitablePaths.push(dstPath);
            }
        }
        return promises;
    }
}

rmSync(DOCUMENTATION_DIR_OUTPUT_PATH, { recursive: true });
generateHtmlFiles();
