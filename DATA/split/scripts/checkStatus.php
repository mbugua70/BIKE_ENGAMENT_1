<?php
require("conn.php");
$res_question=mysqli_query($connect,"SELECT bike1,bike2,game_status FROM game_status  ") or die(mysqli_error($connect));
$row=mysqli_fetch_array($res_question);
$json = json_encode($row);
echo $json;
//echo $row['game_status'];
?>