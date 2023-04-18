import os
from subprocess import Popen

"""
Tiny script that runs markdown-to-html on all the pages in the pages/ directory
and output an out_index.html that can then be manually embedded in index.html
"""

processes = []
for page_file in os.listdir('pages'):
    if not page_file.endswith('.md'):
        continue
    page_name = page_file[:-3]
    
    processes.append(Popen(f'node ../markdown-to-html/index_cli.js pages/{page_name}.md ./pages/out_{page_name}.html', shell=True))

for p in processes:
    p.wait()

compiled_html = ''

for page_file in os.listdir('pages'):
    if not page_file.endswith('.html') or page_file == 'out_index.html':
        continue
    page_name = page_file[4:-5]
    with open(f'pages/{page_file}', 'r') as f:
        page = f.read()
    page = page.replace('\n', '\n    ').replace('<img', '<img loading=\'lazy\'')
    
    compiled_html += f'<div id="page-{page_name}">\n    {page}\n</div>\n'

with open('pages/out_index.html', 'w') as f:
    f.write(compiled_html)