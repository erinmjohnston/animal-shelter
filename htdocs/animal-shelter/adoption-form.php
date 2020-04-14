<?php

header('Access-Control-Allow-Origin: http://localhost:4200');
// header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

// // get the size of incoming data
$content_length = (int) $_SERVER['CONTENT_LENGTH'];
// retrieve data from the request
$postdata = file_get_contents("php://input");
// Extract json format to PHP array
$request = json_decode($postdata, true);
//File that connects to the database
require('connect-db.php');

//Creates the adopt table 
$query = "CREATE TABLE IF NOT EXISTS adopt (
          email VARCHAR(20) PRIMARY KEY, 
          firstName VARCHAR(20),
          lastName VARCHAR(20),
          phone VARCHAR(20),
          address1 VARCHAR(20),
          address2 VARCHAR(20),
          city VARCHAR(20),
          state VARCHAR(20),
          petType VARCHAR(20),
          animalName VARCHAR(20),
          adoptReason VARCHAR(50),
          petExperience VARCHAR(50),
          username VARCHAR(20),
          password VARCHAR(20)
          )";

$statement = $db->prepare($query);
$statement->execute();   

$username = $request['username'];
$password = $request['password'];

$query = "SELECT * FROM adopt WHERE username='$username' AND password='$password' LIMIT 1;";
$statement = $db->prepare($query);
$statement->execute(); 
$response = $statement->fetchAll();

$email = $request['email'];
$firstName = $request['firstName'];
$lastName = $request['lastName'];
$phone = $request['phone'];
$address1 = $request['address1'];
$address2 = $request['address2'];
$city = $request['city'];
$state = $request['state'];
$petType = $request['petType'];
$animalName = $request['animalName'];
$adoptReason = $request['adoptReason'];
$petExperience = $request['petExperience'];

if (count($response) == 0) { //Insert form data into adopt table
  $query = "INSERT INTO adopt (email, firstName, lastName, phone, address1, address2, 
  city, state, petType, animalName, adoptReason, petExperience, username, password)
  VALUES (:email, :firstName, :lastName, :phone, :address1, :address2, 
  :city, :state, :petType, :animalName, :adoptReason, 
  :petExperience, :username, :password)";
} else { //update existing entry for that particular username and password
  $query = "UPDATE adopt
  SET email=:email, firstName=:firstName, lastName=:lastName, phone=:phone, address1=:address1, address2=:address2, 
  city=:city, state=:state, petType=:petType, animalName=:animalName, adoptReason=:adoptReason, petExperience=:petExperience,
  username=:username, password=:password
  WHERE username='".$username."' AND password='".$password."'";
}

if (! strlen($email) > 0) {
  throw new Exception('Email must be provided for this form.');
} else {

  $statement = $db->prepare($query);
  $statement->bindValue(':email', $email);
  $statement->bindValue(':firstName', $firstName);
  $statement->bindValue(':lastName', $lastName);
  $statement->bindValue(':phone', $phone);
  $statement->bindValue(':address1', $address1);
  $statement->bindValue(':address2', $address2);
  $statement->bindValue(':city', $city);
  $statement->bindValue(':state', $state);
  $statement->bindValue(':petType', $petType);
  $statement->bindValue(':animalName', $animalName);
  $statement->bindValue(':adoptReason', $adoptReason);
  $statement->bindValue(':petExperience', $petExperience);
  $statement->bindValue(':username', $username);
  $statement->bindValue(':password', $password);
  $statement->execute();
  $statement->closeCursor();

  // Send response (in json format) back the front end
  echo json_encode(['content'=>$request]);
}
?>