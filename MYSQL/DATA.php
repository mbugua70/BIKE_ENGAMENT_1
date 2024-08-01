<?php
require("conn.php");
$res_question=mysqli_query($connect,"SELECT * FROM game_status ") or die(mysqli_error($connect));
$row=mysqli_fetch_array($res_question);
$json = json_encode($row);
echo $json;
?>