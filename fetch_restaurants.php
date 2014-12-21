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
		$restaurant = $_GET['search'];
		
		$query = "SELECT * FROM restaurants WHERE name LIKE '%{$restaurant}%'";
		
		$query_result = mysqli_query($conn, $query);
		if($query_result){
			$result = array();
			while($row = $query_result->fetch_assoc()){
				$food_query = "SELECT * FROM food WHERE restaurant_id = '".$row['id']."'";
				$food_query_result = mysqli_query($conn, $food_query);
				if($food_query_result){
					$food_result = array();
					while($food_row = $food_query_result->fetch_assoc()){
						$food_result[] = $food_row;
					}
					$row['food'] = $food_result;
				}
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