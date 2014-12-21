<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
	$servername = "localhost";
	$username = "442353";
	$password = "eagles95";
	$database = "442353db3";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $database);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}else{
		$restaurant_id = $_GET['restaurant_id'];
		$query = "SELECT * FROM food WHERE restaurant_id = '".$restaurant_id."'";
		$query_result = mysqli_query($conn, $query);
		if($query_result){
			$result = array();
			while($row = $query_result->fetch_assoc()){
				$result[] = $row;
			}
			echo json_encode($result);
			
			//echo "<pre>";
			//var_dump($result);
			//echo "</pre>";
		}else{
			echo "failure";
		}
		
	
	}

?>