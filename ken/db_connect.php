<?php
// db_connect.php
$servername = "localhost";
$username = "root"; //Replace with your username
$password = ""; //Replace with your password
$dbname = "kenclozer";
$port = 3307;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>