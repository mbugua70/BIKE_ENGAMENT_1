<?php
require("connection.php");
$arr=array();

$rid=mysqli_escape_string($connect,$_POST['player']);
$DID=mysqli_escape_string($connect,$_POST['DID']);

	$res=mysqli_query($connect,"SELECT * FROM crossword_player WHERE  id='$rid' AND did_1='$DID'") or die(mysqli_error($connect));

	if (mysqli_num_rows($res)>0) 
		{
			 $row=mysqli_fetch_array($res);		
			 $arr['marks'] =$row["marks"];
			 $arr['time_taken'] =$row["time_taken"];
			 
					$arr["response"]="success";
	 			 

		}
	else
		{
			 $arr["response"]="fail";
		}
		echo json_encode($arr);