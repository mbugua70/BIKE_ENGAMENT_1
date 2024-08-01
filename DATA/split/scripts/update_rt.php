<?php
require("connection.php");
$arr=array();
$quiz=mysqli_real_escape_string($connect,$_POST['quiz']);
$player=mysqli_real_escape_string($connect,$_POST['player']);
$points=mysqli_real_escape_string($connect,$_POST['points']);
$time_taken=mysqli_real_escape_string($connect,$_POST['time_taken']);
$qid=mysqli_real_escape_string($connect,$_POST['qid']);
$aid=mysqli_real_escape_string($connect,$_POST['aid']);

$accuracy=($points/40)*100;
$accuracy2=number_format($accuracy,2);

//echo $accuracy2;

$time_taken=$time_taken/100;

if($time_taken>300)
{
    $time_taken=300;
}
$sql="UPDATE  player_cco_1  SET attempt='1', temp_points='$points',  accuracy='$accuracy',time_taken='$time_taken', temp_time_taken='$time_taken', temp_accuracy='$accuracy2' WHERE id='$player' ";
$res=mysqli_query($connect,$sql) or die(mysqli_error($connect)); 

//echo $sql;

if (mysqli_affected_rows($connect)>0) 
  {
     $arr['response']=1;
     processAnswers($qid,$aid);
    }
    else
    {
      $arr['response']=0;
    }
  

    function processAnswers($qid,$aid)
    {
      global $connect,$time,$date,$player;
      $resPA=mysqli_query($connect,"SELECT id FROM marking_scheme WHERE u_id='$player' and q_id='$qid' and u_ans='$aid'") or die(mysqli_error($connect));
      if (mysqli_num_rows($resPA)>0) 
          {
            //skip
          }
          else
          { 
             $sql="INSERT INTO `marking_scheme`( `u_id`, `q_id`, `u_ans`,  `submit_time`, `submit_date`) VALUES('$player',  '$qid', '$aid', '$time','$date')";
            $result=mysqli_query($connect,$sql) or die(mysqli_error($connect));

          }
      
     }

mysqli_close($connect);    
echo json_encode($arr);
exit;