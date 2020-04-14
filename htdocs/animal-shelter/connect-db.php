<?php

$hostname = 'localhost:3306';
$dbname = 'animals1';
$username = 'emurdock1101';
$password = 'Nicpool16';

$dsn = "mysql:host=$hostname;dbname=$dbname";

/** connect to the database **/
try
{
   $db = new PDO($dsn, $username, $password);
}
catch (PDOException $e)     // handle a PDO exception (errors thrown by the PDO library)
{
   $error_message = $e->getMessage();        
   echo "<p>An error occurred while connecting to the database: $error_message </p>";
}
catch (Exception $e)       // handle any type of exception
{
   $error_message = $e->getMessage();
   echo "<p>Error message: $error_message </p>";
}
  
?>
