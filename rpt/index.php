<?php
require("scripts/connection.php");
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Report</title>
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
	  		height: 60px;
	  		border: 1px solid grey;
	  		padding-left: 10px;
	  	}

	  </style>
</head>
<body>
	
		
	
		 
<table style="width: 100%" cellpadding="0" cellspacing="0">
	

             	<tr>
             	<td> #</td>
             	<td>Name</td>
             	<td>Phone</td>
             	<td>Distance</td>
             	<td>Time Taken</td>
             	<td>Date</td>
             	<td>Time</td>
             
             	
             </tr>
      	<?php $res=mysqli_query($connect,"SELECT *  FROM player ") or die(mysqli_error($connect)); 
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
		 	</table>
		  
        
		
	

	

</body>
</html>