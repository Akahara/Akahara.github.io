const videosList = document.getElementById("videos-list");
const videoItemTemplate = document.getElementById("video-item-template");

function addVideoToList(video) {
    let node = document.importNode(videoItemTemplate.content, true).firstElementChild;
    node.querySelector(".template-video-link").href = video.url;
    node.querySelector(".template-video-vignette").src = video.vignette;
    node.querySelector(".template-video-title").innerText = video.title;
    node.querySelector(".template-video-author").innerText = video.author;
    node.querySelector(".template-video-view-count").innerText = video.views + " views";
    videosList.appendChild(node);
}

function buildVideoList(apiList) {
    let urlParams = new URLSearchParams(window.location.search);
    let filter = urlParams.get('search_query');
    for(let video of apiList) {
        if(filter == null || video.title.includes(filter))
            addVideoToList(video);
    }
}

function reloadVideosList() {
    videosList.innerHTML = ""; // remove all items from the list
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api.php");
    xhr.send();
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let videos = JSON.parse(xhr.responseText);
            buildVideoList(videos);
        } else {
            throw new Error("Could not fetch videos: " + xhr.statusText);
        }
    });
}

reloadVideosList();