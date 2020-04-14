<?php
require('connect-db.php');
require('getPets.php');

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

?>

<?php

if($_GET['petType'] != null)
{
	$getPetType = $_GET['petType'];
}

if($_GET['gender'] != null)
{
	$getGender = $_GET['gender'];
}

if($getPetType || $getGender)
{

	if ($getPetType == "Any" && $getGender == "Any")
	{
		$pets = getAllPets();
	}

	elseif ($getPetType == "Any")
	{
		$pets = getPetsByGender($getGender);
	}

	elseif ($getGender == "Any")
	{
		$pets = getPetsByType($getPetType);
	}

	else
	{
		$pets = getPetsByTypeAndGender($getPetType, $getGender);
	}

	echo json_encode($pets);
}




?>