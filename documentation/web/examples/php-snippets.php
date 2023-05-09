<!-- Syntaxe de base -->

<?php

$a = 4;
// boucle for classique
for($i = 0; $i < $a; $i++)
  echo "$i + 3 = " . ($i+3) . "<br>";

// liste, les éléments ne sont pas forcément du même type
$array = [ $a, 4, "foo" ];
// ajouter à une liste
$array[] = 43;
// afficher un array
print_r($array);
echo "<br>";

// un tableau peut avoir des clés
$car = [ "wheels" => 4, "speed" => 80, "name" => "a car" ];
// quand vous affichez de grands tableaux, utiliser <pre> peut être très pratique
echo "<pre>";
print_r($car);
echo "</pre>";
// un tableau peut être indéxé de cette manière
echo $car['wheels'] . "<br>";

// les textes peuvent être composés avec .
$str1 = "a " . "text";
// les " permettent de formatter avec des variables, les ' non
$str2 = "$str1 with $a words"; // a text with 4 words
$str3 = '$str1 with $a words'; // $str1 with $a words
$str4 = "the car has $car[wheels] wheels"; // the car has 4 wheels

// boucle foreach, avec les clés
foreach($car as $key => $value)
  echo "$key -> $value<br>";
// boucle foreach, sans les clés
foreach($array as $value)
  echo "[] $value<br>";

?>

<!-- Validation des paramètres POST -->

<?php

// utiliser $_GET pour une requete GET plutot que POST

if(!isset($_POST['username']) || !isset($_POST['password'])) {
  header("Location: /bad_connection.html?reason=missing_info"); // redirection
  exit(); // stoppe l'execution du php
}
if(!areValidCredencials($_POST['username'], $_POST['password'])) {
  header("Location: /bad_connection.html?reason=bad_credentials"); // redirection
  exit(); // stoppe l'execution du php
}

echo "Connected";

?>

<!-- PDO (connexion à une base de données SQL) -->

<?php

$connection = new PDO("mysql:host=localhost;dbname=mydatabase", "root", "");
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

function FetchDatabase($someValue) {
  global $connection;
  $request = $connection->prepare("SELECT * FROM mytable WHERE mycolumn = :somevalue;");
  $request->execute([ "somevalue" => $someValue ]);
  return $request->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode(FetchDatabase(3));

?>

<!-- Sessions -->

<?php

// à rajouter de toute façon
session_start();

// redirection si l'utilisateur n'est pas connecté
// Pour "connecter" quelqu'un il suffit de faire
// quelque chose du style $_SESSION["user_id"] = "someID"
if(!isset($_SESSION["user_id"])) {
    header("Location: /connection");
    exit();
}

?>

<?php

// complètement réinitialiser une session
session_start();  
session_unset();
session_destroy();

?>