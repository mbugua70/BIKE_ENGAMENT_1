<?php
header('Content-type: application/json');
require("connection.php");
$arr=array();

$phone=mysqli_escape_string($connect,$_POST['ek_number']);
$name=mysqli_escape_string($connect,$_POST['fname']);
$team=mysqli_escape_string($connect,$_POST['team']);
$DID=mysqli_escape_string($connect,$_POST['DID']);
$phone=str_replace(" ", "", $phone);

$res2=mysqli_query($connect,"SELECT * from wordfind WHERE phone_number='$phone'") or die(mysqli_error($connect)); 

$trials=mysqli_num_rows($res2);
if ($trials>0) {
     $arr["response"]="limit";
     $row=mysqli_fetch_array($res2);		
			 $arr['marks'] =$row["marks"];
			 $arr['time_taken'] =$row["time_taken"];
			 $arr['id'] =$row["id"];
}
else
{
    
$sql="INSERT INTO `wordfind` ( `phone_number`,name,  date_registered,  	time_registered,date_finished,time_finished ,marks,time_taken,category ,did_1) VALUES('$phone', '$name', '$date', '$time','','','0','0','$team','$DID')";
  $result=mysqli_query($connect,$sql) or die(mysqli_error($connect));
 $rid= mysqli_insert_id($connect);
 	if (mysqli_affected_rows($connect)>0) 
	{
	    $arr["response"]="success";
	    $arr["status"]=$rid;
	}
	else
	{
	    $arr["response"]="fail";
	    $arr["status"]=0;
	}

}
    


echo json_encode($arr);


?>