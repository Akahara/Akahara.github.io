<?php

include 'bdd.php';

$searchQuery = "";
if(isset($_GET['search_query']))
  $searchQuery = $_GET['search_query'];
$filtered_videos = GetVideos($searchQuery);

echo json_encode($filtered_videos);

?>