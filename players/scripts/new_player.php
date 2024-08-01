<?php
require("connection.php");
$arr=array();
$game=mysqli_escape_string($connect,$_POST['game']);
$name=mysqli_escape_string($connect,$_POST['name']);
$phone=mysqli_escape_string($connect,$_POST['phone']);
$ba_name=mysqli_escape_string($connect,$_POST['ba_name']);
$ba_phone=mysqli_escape_string($connect,$_POST['ba_phone']);
//$merchandise=mysqli_escape_string($connect,$_POST['merchandise']);
$points=mysqli_escape_string($connect,$_POST['points']);
$age=mysqli_escape_string($connect,$_POST['age']);
$product=mysqli_escape_string($connect,$_POST['product']);
$phone=str_replace(" ","",$phone);

$name=str_replace(" ","",$name);


    $sql="INSERT INTO `player` (date_registered, time_registered, name, age, phone, distance_taken,time_taken,bike) VALUES('$date', '$time', '$name','0','$phone','0','0','0')";
      $result=mysqli_query($connect,$sql) or die(mysqli_error($connect));
     $rid= mysqli_insert_id($connect);
    if (mysqli_affected_rows($connect)>0) 
    {
      $arr["response"]=1;
      $arr["id"]=$rid;
     
    }
    else
    {
      $arr["response"]=3;
    }

echo json_encode($arr);
exit;