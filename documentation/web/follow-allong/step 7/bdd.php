<?php

$connection = new PDO("mysql:host=localhost;dbname=tubeyou", "root", "");
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

function GetVideos($searchQuery) {
  global $connection;
  $request = $connection->prepare("SELECT * FROM videos WHERE title LIKE ?;");
  $request->execute([ "%$searchQuery%" ]);
  return $request->fetchAll();
}


?>