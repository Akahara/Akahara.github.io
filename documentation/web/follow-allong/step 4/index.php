<?php

include 'videos.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="index.css" rel="stylesheet">
  <title>tubeYou</title>
</head>
<body>
  <!-- Header (top bar) -->
  <header id="page-header">
    <span>
      <span class="material-icons" id="menu-btn">menu</span>
      <span class="tubeyou-logo">tubeYou</span>
    </span>
    <span id="search-bar">
      <input type="text" id="research-input" placeholder="Search">
      <span class="material-icons" id="search-btn">search</span>
    </span>
    <span>
      <span class="material-icons-outlined">apps</span>
      <span class="material-icons-outlined">notifications</span>
    </span>
  </header>

  <div id="page-body">
    <!-- Left side -->
    <div>
      <div id="video-player">
        <img src="https://i.ytimg.com/vi/dNhL0ufsGdI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeQ_K4TuuNUySx1IXE3TETcybkOA"/>
      </div>
      <h3>Title</h3>
      <div id="video-actions">
        <span class="small-text">1 view - May 21, 2022</span>
        <span>
          <span class="material-icons-outlined" id="like-btn">thumb_up</span>
          <span>1</span>
        </span>
        <span>
          <span class="material-icons-outlined" id="dislike-btn">thumb_down</span>
          <span>DISLIKE</span>
        </span>
        <span class="material-icons-outlined">more_horiz</span>
      </div>
      <hr>
      <!-- Description etc -->
      <div id="video-info">
        <a href="https://www.youtube.com/channel/UCbUHGz_K9jhvbQjfXdJUwxA">
          <img class="profile-picture" src="https://yt3.ggpht.com/TaBhA4Z82DjIYODBYKkUzGJSEvwh2JufU4tYGNQXmccs8NBdJpS-s2m6JNFQf8nXPU_nW7oUDA=s48-c-k-c0x00ffffff-no-nd-rj"/>
        </a>
        <div>
          <a href="https://www.youtube.com/channel/UCbUHGz_K9jhvbQjfXdJUwxA">
            <h4>tubeurYou</h4>
          </a>
          <span class="small-text">2M subs</span>
          <p>
            Description:
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione hic reiciendis blanditiis ea maiores culpa. Reiciendis soluta necessitatibus, laudantium sunt id dignissimos laborum obcaecati eligendi consequatur, voluptate atque, sequi modi.
          </p>
        </div>
        <div>
          <button class="subscribe-btn">Subscribe</button>
          <span class="material-icons-outlined">notifications</span>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <ul id="videos-list">
    <?php
      for($i = 0; $i < 10; $i++) {
        $video = $videos[array_rand($videos)];
    ?>
      <li>
        <a href="<?= $video['url'] ?>">
          <img src="<?= $video['vignette'] ?>" class="video-vignette">
          <div>
            <div><?= $video['title'] ?></div>
            <span><?= $video['author'] ?></span><br/>
            <span class="small-text"><?= $video['views'] ?> views</span>
          </div>
        </a>
      </li>
    <?php } ?>
    </ul>
  </div>
</body>
</html>