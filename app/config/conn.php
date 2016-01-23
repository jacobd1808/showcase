<?php
// Connection Details 

// CHANGE TO YOUR DATABASE DETAILS 

define( "DB_DATA_SOURCE", "mysql:host=localhost;dbname=teamProj" );
define( "DB_USERNAME", "root" );
define( "DB_PASSWORD", "" );


// Class Configure 

function __autoload($class) {
	// rename $folder to where ever your working folder is 
	$folder = '/teamProj';
	require_once($_SERVER['DOCUMENT_ROOT'].$folder."/app/models/$class.php");
}

include_once "functions.php";
$conn = ConnectionFactory::connect();

$profiles = new User($conn); 

if(isset($_SESSION['username'])) {
	$userData = $profiles->checkProfiles($_SESSION['username']);
	if($userData['active_profile'] != NULL) {
		$userData = $profiles->fetchUser($_SESSION['username']);
	} 
	$_SESSION['id'] = $userData['id'];
}
?>