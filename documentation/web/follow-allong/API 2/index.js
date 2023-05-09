const videosList = document.getElementById("videos-list");
const videoItemTemplate = document.getElementById("video-item-template");
const searchBarForm = document.getElementById("search-bar");

function addVideoToList(video) {
    let node = document.importNode(videoItemTemplate.content, true).firstElementChild;
    node.querySelector(".template-video-link").href = video.url;
    node.querySelector(".template-video-vignette").src = video.vignette;
    node.querySelector(".template-video-title").innerText = video.title;
    node.querySelector(".template-video-author").innerText = video.author;
    node.querySelector(".template-video-view-count").innerText = video.views + " views";
    videosList.appendChild(node);
}

function reloadVideosList(searchQuery=null) {
    videosList.innerHTML = ""; // remove all items from the list
    let xhr = new XMLHttpRequest();
    let url = "api.php";
    if(searchQuery != null)
        url += "?search_query=" + encodeURIComponent(searchQuery);
    xhr.open("GET", url);
    xhr.send();
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let videos = JSON.parse(xhr.responseText);
            for(let video of videos)
                addVideoToList(video);
        } else {
            throw new Error("Could not fetch videos: " + xhr.statusText);
        }
    });
}

searchBarForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let fd = new FormData(searchBarForm); // an object containing all the form's fields
    let searchQuery = fd.get('search_query');
    reloadVideosList(searchQuery);
});

reloadVideosList();