<?php

function getPetsOfMonth()
{
	global $db;
	$query = "SELECT * FROM pets ORDER BY RAND() LIMIT 3";
	$statement = $db->prepare($query);
	$statement->execute();

	$results = $statement->fetchAll(PDO::FETCH_ASSOC);
	$statement->closecursor();

	return $results;
}

function getPetsByType($type)
{
	global $db;
	$query = "SELECT * FROM pets where type = '". $type . "'";
	$statement = $db->prepare($query);
	$statement->execute();

	$results = $statement->fetchAll(PDO::FETCH_ASSOC);
	$statement->closecursor();

	return $results;
}

function getPetsByGender($gender)
{
	global $db;
	$query = "SELECT * FROM pets where gender = '" . $gender . "'";
	$statement = $db->prepare($query);
	$statement->execute();

	$results = $statement->fetchAll(PDO::FETCH_ASSOC);
	$statement->closecursor();

	return $results;
}

function getPetsByTypeAndGender($type, $gender)
{
	global $db;
	$query = "SELECT * FROM pets where type = '". $type . "' and gender = '" . $gender . "'";
	$statement = $db->prepare($query);
	$statement->execute();

	$results = $statement->fetchAll(PDO::FETCH_ASSOC);
	$statement->closecursor();

	return $results;
}

function getAllPets()
{
	global $db;
	$query = "SELECT * FROM pets";
	$statement = $db->prepare($query);
	$statement->execute();

	// fetchAll() returns an array for all of the rows in the result set
	$results = $statement->fetchAll(PDO::FETCH_ASSOC);

	// closes the cursor and frees the connection to the server so other SQL statements may be issued
	$statement->closecursor();

	return $results;
}

?>
