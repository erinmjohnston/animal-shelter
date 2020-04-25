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
$request = json_decode($postdata,true);
//File that connects to the database
require('connect-db.php');

//Creates the volunteer table 
$query = "CREATE TABLE IF NOT EXISTS volunteer (
          email VARCHAR(20) PRIMARY KEY, 
          firstName VARCHAR(20),
          lastName VARCHAR(20),
          phone VARCHAR(20),
          volunteerReason VARCHAR(50),
          longTermFoster BOOLEAN,
          inShelter BOOLEAN,
          fieldTrips BOOLEAN,
          ambassador BOOLEAN
          )";

$statement = $db->prepare($query);
$statement->execute();   

//Insert form data into volunteer table
$query = "INSERT INTO volunteer (email, firstName, lastName, phone, 
    volunteerReason, longTermFoster, inShelter, 
    fieldTrips, ambassador)
VALUES (:email, :firstName, :lastName, :phone, 
    :volunteerReason, :longTermFoster, :inShelter, 
    :fieldTrips, :ambassador)";

$email= $request['email'];
$firstName = $request['firstName'];
$lastName = $request['lastName'];
$phone = $request['phone'];
$volunteerReason = $request['volunteerReason'];
$longTermFoster = $request['longTermFoster'];
$inShelter = $request['inShelter'];
$fieldTrips = $request['fieldTrips'];
$ambassador = $request['ambassador'];

if (! strlen($email) > 0) {
  throw new Exception('Email must be provided for this form.');
} else {

  $statement = $db->prepare($query);
  $statement->bindValue(':email', $email);
  $statement->bindValue(':firstName', $firstName);
  $statement->bindValue(':lastName', $lastName);
  $statement->bindValue(':phone', $phone);
  $statement->bindValue(':volunteerReason', $volunteerReason);
  $statement->bindValue(':longTermFoster', $longTermFoster);
  $statement->bindValue(':inShelter', $inShelter);
  $statement->bindValue(':fieldTrips', $fieldTrips);
  $statement->bindValue(':ambassador', $ambassador);
  $statement->execute();
  $statement->closeCursor();

  // Send response (in json format) back the front end
  echo json_encode(['content'=>$request]);
}
?>