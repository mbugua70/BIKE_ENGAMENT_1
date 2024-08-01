<?php
require("connection.php");
$bike1=mysqli_escape_string($connect,$_POST['bike1']);
$bike2=mysqli_escape_string($connect,$_POST['bike2']);
$sql="UPDATE game_status SET  game_status='0', bike1='$bike1', bike2='$bike2' , bike1_distance='0', bike2_distance='0', bike1_time='0', bike2_time='0', bike1_speed='0', bike2_speed='0'  ";
$res_question=mysqli_query($connect,$sql) or die(mysqli_error($connect));

  if (mysqli_affected_rows($connect)>0) 
  {
    $output['response']=1;
  }
  else
  {
    $output['response']="0";
  }
  echo json_encode($output);

 // echo $output['response'];

?>