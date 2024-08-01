<?php
require("connection.php");
$number="";
$id=array();
$name=array();
$arr=array();
$loc="";
$staff=mysqli_escape_string($connect,$_POST['ek_number']);
//$prefix=mysqli_escape_string($connect,$_POST['category']);
$fname="";
$DID=mysqli_escape_string($connect,$_POST['DID']);

//$staff=$prefix."-".$staff;

//$s=getPic();

//print_r($content);
//	$phone=str_replace(" ","",$phone);
$quiz_status=checkQuizStatus();
if ($quiz_status==1) {
	$staff=str_replace(" ","",$staff);
	$staff=strtoupper($staff);
	$res=mysqli_query($connect,"SELECT * FROM player_cco_1 WHERE staff='$staff'") or die(mysqli_error($connect)); 



if (mysqli_num_rows($res)>0) 
{
		$row=mysqli_fetch_array($res);
		
	 //	$arr["response"]=2;
	 	$id_2=$row['id'];
	    $arr["id"]=$id_2;

	   
              
                 $arr['points'] =$row['accuracy'];
                 $arr['time_taken'] =$row['time_taken'];
                 $arr['accuracy'] =$row['accuracy'];
                 $arr['attempt'] =$row['attempt'];
                 
                 	$arr["response"]=2;
                 
             
             
	        
}
else
{
	$sql="INSERT INTO `player_cco_1` (  date_registered, time_registered, category, points, accuracy, time_taken,staff,fname ,uppy,attempt,did_1,did_2) VALUES(  '$date', '$time', '$loc',0,0,0,'$staff','$fname',0,1,'$DID','')";
		  $result=mysqli_query($connect,$sql) or die(mysqli_error($connect));
		 $rid= mysqli_insert_id($connect);
		 	if (mysqli_affected_rows($connect)>0) 
			{
				//$id=mysqli_insert_id($connect);
			    $arr["response"]=1;
	    		$arr["id"]=$rid;
	    		//$arr["name"]=$name;	 
			}
			else
			{
			    $arr["response"]=3;
	    		//$arr["status"]=33;
			}
}

}
else
{
	 $arr["response"]=4;
}



function checkQuizStatus()
{
	global $connect;
	$res=mysqli_query($connect,"SELECT * FROM active_status ") or die(mysqli_error($connect)); 
$row=mysqli_fetch_array($res);
$status=$row['status'];
return $status;
}

mysqli_close($connect);
echo json_encode($arr);
exit;


