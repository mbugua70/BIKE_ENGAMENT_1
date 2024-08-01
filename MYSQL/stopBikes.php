<?php
require("conn.php");
$sql="UPDATE game_status SET  game_status='3'  ";
$res_question=mysqli_query($connect,$sql) or die(mysqli_error($connect));

  if (mysqli_affected_rows($connect)>0) 
  {
    $output['response']=1;
  }
  else
  {
    $output['response']="0";
  }

  echo $output['response'];

?>