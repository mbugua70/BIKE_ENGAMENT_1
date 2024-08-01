<?php
require("connection.php");
//$pop=mysqli_escape_string($connect,$_GET['POP']);
$output = array();
$sub_topic=22;
        $res_question=mysqli_query($connect,"SELECT id,title,answer_type, qp FROM hr_question WHERE sub_topic='$sub_topic'   order by RAND() LIMIT 4") or die(mysqli_error($connect));
      $q_num=0;
      $c_count=0;
    $count=mysqli_num_rows($res_question);

    $question = array();

    while($row=mysqli_fetch_array($res_question))
    {


      $q_num++;

        if ($q_num==$count) {
         $class="final";
        }
        else
        {
         $class="odi"; 
        }
       
    $qid = $row['id'];
    
    $title = $row['title'];
   
    $answer_type = $row['answer_type'];
    $temp_question = array();
    $temp_question['id']=$qid;
    $temp_question['title']=$title;
    $temp_question['c_count']=$c_count;
    $temp_question['answer_type']=$answer_type;
    $question['question']=$temp_question;

    $qp = $row['qp'];

      $LETTERS=["A","B","C","D","E","F","G","H","I","J","K","L"];
$answer = array();
            $res_answers=mysqli_query($connect,"SELECT id,question,answer_text,status FROM hr_answers WHERE question='$qid'  order by RAND() ") or die(mysqli_error($connect));
           $number_of_choices= mysqli_num_rows($res_answers);

            $a_num=0;
            $log_report1="";
            $i=0;
            
           while($row_answers=mysqli_fetch_array($res_answers))
            {
              $temp_answer=array();
              $i++;
              $answer_text = $row_answers['answer_text'];
              $aid = $row_answers['id'];
              $status = $row_answers['status'];
              $temp_answer['answer_text']=$row_answers['answer_text'];
              $temp_answer['aid']=$aid;
              $temp_answer['status']=$status;
              $answer[]=$temp_answer;
              $a_num++;
            }
           
          
            $question['answers']=$answer;

    
      $output[]=$question;
      $c_count++;
     
    }
    echo json_encode($output);

    