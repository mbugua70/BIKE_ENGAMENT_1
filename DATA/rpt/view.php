 	<?php
 	$sent_loc="";
require("../scripts/connection.php");
if (isset($_POST['loc'])) {

$sent_loc=mysqli_escape_string($connect,$_POST['loc']);
$pic=$_POST['pic'];
$numz=$_POST['numz'];


foreach( $pic as $key => $n ) {
$current_pic=$pic[$key];
$current_numz=$numz[$key];
  $sql2="UPDATE merchandise SET amount_remaining=$current_numz WHERE name='$current_pic' AND region='$sent_loc' ";
	mysqli_query($connect,$sql2); 

}

echo "<h3 style='color:red;'>Update Completed</h3> ";

}

if (isset($_GET['loc'])) {
	$sent_loc=$_GET['loc'];
	}


 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Merch</title>
	<link rel="stylesheet" href="../css/b_style.css">

	  <meta name="viewport" content="width=device-width,initial-scale=1">
	  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
	  <style type="text/css">
	  	body{
	  		background-color: #fff;
	  		color: #000;
	  	}
	  	td{
	  		font-size: 18px;
	  		height: 40px;
	  		border: 1px solid grey;
	  		padding-left: 10px;
	  	}
	  	.input{
	  		width: 100%;
	  		height: 80%;
	  		font-size: 18px
	  	}
	  	.butty{
	  		width: 80%;
	  		height: 100%;
	  	}
	  </style>
</head>
<body>
	
	
	
	<form action="updater.php" method="POST">

		 
<table style="width: 100%">
	<tr>
		<td>Number</td>
		<td>Region</td>
		<td>Phone</td>
		<td>Service</td>
		<td>Gift</td>
		<td>Date</td>
		<td>Time</td>
		
	</tr>
		 	<?php $res=mysqli_query($connect,"SELECT *  FROM player WHERE region='$sent_loc'") or die(mysqli_error($connect)); 
$i=0;
		 	while($row=mysqli_fetch_array($res))
 {
 	$i++;
 	$name=$row['name'];
 	$phone=$row['phone'];
 	$age=$row['age'];
 	$distance_taken=$row['distance_taken'];
 	$time_taken=$row['time_taken'];
 	$bike=$row['bike'];
 	$time_registered=$row['time_registered'];
 	$date_registered=$row['date_registered'];
 	?>
<tr>
		<td><?php echo $i; ?></td>
		<td><?php echo $name; ?></td>
		<td><?php echo $phone; ?></td>
		<td><?php echo $distance_taken; ?></td>
		<td><?php echo $time_taken; ?></td>
		<td><?php echo $date_registered; ?></td>
		<td><?php echo $time_registered; ?></td>
		
		
	</tr>
 	<?php
 }

		 	?>
		 	<tr>
		 		<td colspan="7"><a href="index.php">Go Back</a></td>
		 		
		 	</tr>

		 	</table>
		  
           </form> 
      
        
		
	

	

</body>
</html>