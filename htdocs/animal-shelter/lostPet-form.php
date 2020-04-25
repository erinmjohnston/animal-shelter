<?php

header('Access-Control-Allow-Origin: http://localhost:4200');
// header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

// get the size of incoming data
$content_length = (int) $_SERVER['CONTENT_LENGTH'];
// retrieve data from the request
$postdata = file_get_contents("php://input");
// Extract json format to PHP array
$request = json_decode($postdata, true);

require('connect-db.php');

$query = "CREATE TABLE IF NOT EXISTS lostpet (
          email VARCHAR(20) PRIMARY KEY, 
          petType VARCHAR(20),
          petName VARCHAR(20),
          breed VARCHAR(20),
          color VARCHAR(20),
          date VARCHAR(20),
          location VARCHAR(20),
          collar BOOLEAN,
          physicalDescription VARCHAR(20),
          firstName VARCHAR(20),
          lastName VARCHAR(20),
          phone VARCHAR(20)
          )";
 
$statement = $db->prepare($query);
$statement->execute();   

$query = "INSERT INTO lostpet (email, petType, petName, breed,
color, date, location, collar, physicalDescription,
firstName, lastName,
phone)
VALUES (:email, :petType, :petName, :breed,
:color, :date, :location, :collar, :physicalDescription,
:firstName, :lastName,
:phone)";

$email = $request['email'];
$firstName = $request['firstName'];
$lastName = $request['lastName'];
$phone = $request['phone'];
$petType = $request['petType'];
$petName = $request['petName']; 
$breed = $request['breed'];
$color = $request['color'];
$date = $request['date'];
$location = $request['location'];
$collar = $request['collar'];
$physicalDescription = $request['physicalDescription'];

if (! strlen($email) > 0) {
    throw new Exception('Email must be provided for this form.');
} else {

    $statement = $db->prepare($query);
    $statement->bindValue(':email', $email);
    $statement->bindValue(':firstName', $firstName);
    $statement->bindValue(':lastName', $lastName);
    $statement->bindValue(':phone', $phone);
    $statement->bindValue(':petType', $petType);
    $statement->bindValue(':petName', $petName);
    $statement->bindValue(':breed', $breed);
    $statement->bindValue(':color', $color);
    $statement->bindValue(':date', $date);
    $statement->bindValue(':location', $location);
    $statement->bindValue(':physicalDescription', $physicalDescription);
    $statement->bindValue(':collar', $collar);

    $statement->execute();
    $statement->closeCursor();

    // Send response (in json format) back the front end
    echo json_encode(['content'=>$request]);
}

?>