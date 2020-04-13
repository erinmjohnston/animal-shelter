<?php
require('connect-db.php');
require('getPets.php');

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$action = "list_tasks";        // default action
?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
  <title>PHP and database</title>
  <style>
    label { width: 120px; }
    textarea { border:1px solid #ddd; }
  </style>
</head>
<body>

  <div class="container">
    <h1>Pets</h1>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
   $pets = getAllPets();
   include('viewPet.php');
   return $pets;
}

?>

  </div>


</body>
</html>
