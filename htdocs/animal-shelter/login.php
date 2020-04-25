<?php

  // session_start();

  //session_destroy()

  header('Access-Control-Allow-Origin: http://localhost:4200');
  // header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata, true);
  require('connect-db.php');

  $username = $request['username'];
  $password = $request['password'];

  $query = "SELECT * FROM adopt WHERE username='$username' AND password='$password' LIMIT 1;";
  $statement = $db->prepare($query);
  $statement->execute();  

  //$response is now an array. get certain values $response['column-name']
  $response = $statement->fetchAll();

  echo json_encode($response);
?>