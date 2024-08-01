<?php
require("conn.php");
$output=array();
$speed=$_GET['speed'];
$distance=$_GET['distance'];
$player=$_GET['player'];
$bike=$_GET['bike'];
//$bike="bike1";
$timex=$_GET['time'];
$distance=$distance;
$timex=$timex/1000;
	mysqli_query($connect,"INSERT INTO `arduino_post`(  `speed`, `distance`,t_date,t_time,player,bike) VALUES('$speed','$distance','$date','$time','$player','$bike')") or die(mysqli_error($connect));

	if (mysqli_affected_rows($connect)>0) 
	{
		$output['response']=updateScore($bike,$distance,$timex,$player,$speed);
	}
	else
	{
		$output['response']="0";
	}

	//$json = json_encode($output);

	echo $output['response'];

	function gameStatus()
    {
    	global $connect;
      $res_question=mysqli_query($connect,"SELECT game_status FROM game_status  ") or die(mysqli_error($connect));
      $row=mysqli_fetch_array($res_question);
      return $row['game_status'];
    }


    function updateScore($bike,$distance,$timex,$player,$speed)
    {
      global $connect;
      $col=$bike."_distance";
      $col2=$bike."_time";
      $col3=$bike."_speed";
      $complete_status=1;
      $sql="UPDATE game_status SET $col='$distance', $col2='$timex', $col3='$speed' WHERE game_status='1'  ";
      $res_question=mysqli_query($connect,$sql) or die(mysqli_error($connect));
      $sql2="UPDATE player SET time_taken=time_taken+$timex, distance_taken=distance_taken+$distance WHERE name='$player'  ";
      $res_question=mysqli_query($connect,$sql2) or die(mysqli_error($connect));
     $complete_status = gameStatus();
      return $complete_status; 
    }

?>