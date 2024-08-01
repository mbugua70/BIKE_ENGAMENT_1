<?php
require("connection.php");
$arr=array();
$quiz=mysqli_real_escape_string($connect,$_POST['quiz']);
$player=mysqli_real_escape_string($connect,$_POST['player']);
$points=mysqli_real_escape_string($connect,$_POST['points']);
$time_taken=mysqli_real_escape_string($connect,$_POST['time_taken']);
$accuracy=mysqli_real_escape_string($connect,$_POST['accuracy']);
$UA=mysqli_real_escape_string($connect,$_POST['UA']);
//$time_status=mysqli_escape_string($connect,$_POST['time_status']);
$DID=mysqli_escape_string($connect,$_POST['DID']);
$quiz_status=checkQuizStatus();
$time_taken=$time_taken;

if($time_taken>300)
{
    $time_taken=300;
}

$res=mysqli_query($connect,"UPDATE  player_cco_1  SET  points='$points', time_taken='$time_taken', accuracy='$accuracy', uppy=1 , end_time='$time', end_date='$date' , quiz_status='$quiz_status', time_status='-', did_2='$DID' WHERE id='$player' ") or die(mysqli_error($connect)); 

if (mysqli_affected_rows($connect)>0) 
	{
		 $arr['response']=1;
		 processAnswers($UA);
		}
		else
		{
			$arr['response']=0;
		}
	

		function processAnswers($UA)
		{
			global $connect,$time,$date,$player;
			$chunks=explode(",",$UA);
		 $c_num=count($chunks);
		 for ($i=1; $i < $c_num; $i++) 
		 { 
		 	$q_a=$chunks[$i];
		 	$f_c=explode("|",$q_a);
		 	$count_f_c=count($f_c);
		 	if ($count_f_c==2) 
		 	{
			 	$q=$f_c[0];
			 	$a=$f_c[1];
			 	$resPA=mysqli_query($connect,"SELECT id FROM marking_scheme WHERE u_id='$player' and q_id='$q' and u_ans='$a'") or die(mysqli_error($connect));
			 	if (mysqli_num_rows($resPA)>0) 
			          {
			            //skip
			          }
			          else
			          { 
			              $sql="INSERT INTO `marking_scheme`( `u_id`, `q_id`, `u_ans`,  `submit_time`, `submit_date`) VALUES('$player',  '$q', '$a', '$time','$date')";
					  		$result=mysqli_query($connect,$sql) or die(mysqli_error($connect));
					  }

		 
		
		
		 	
		 	}
		 }

	}

	function checkQuizStatus()
{
	global $connect;
	$resx=mysqli_query($connect,"SELECT * FROM active_status ") or die(mysqli_error($connect)); 
$rowx=mysqli_fetch_array($resx);
$status=$rowx['status'];
return $status;
}
	mysqli_close($connect);
echo json_encode($arr);
exit;