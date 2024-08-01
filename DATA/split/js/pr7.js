 var vidlength=50;
    var myPlayer;
    var OT_CB=0;
    var isStart=0;
    var myScore=0;
    current_question=0;
    var pause_times=["0:15","0:30","0:50"];
    var seconds_times=[];
setUpQuestions(pause_times);
convertToTimes(pause_times);
var current_pos=0;
 var  OT_INTERVAL ;
function setUpQuestions(pause_times)
{
  len=pause_times.length;
  html_code="";
  for (var i = 0; i < len; i++) {
    pos=pause_times[i];
     segments = pos.split(":"); 
     minutes=Number(segments[0]);
     seconds=Number(segments[1]);
     display_pos=i+1;

     total_time=(minutes*60)+seconds;

     percent=(total_time/vidlength)*100;
     cls="inactive";
     if (i==0) 
     {
cls="activate";
     }

     html_code=html_code+'<div class="group_indicator " style="left: '+percent+'%;"><button id="indicator_'+i+'" class="circle_number '+cls+'">'+display_pos+'</button><div class="time_display">'+pos+'</div></div>';
     
  }
  console.log(html_code);
  $("#progress_holder").append(html_code);

}


function convertToTimes(pause_times)
{
 len=pause_times.length;
  for (var i = 0; i < len; i++) {
    pos=pause_times[i];
     segments = pos.split(":"); 
     minutes=Number(segments[0]);
     seconds=Number(segments[1]);
     display_pos=i+1;
     total_time=(minutes*60)+seconds;
     seconds_times.push(total_time);
  }

 // console.log(seconds_times);
}
//player.autoplay('muted');
    videojs('#my-video').ready(function(){
    myPlayer= this;
   myPlayer.fill(true);
  myPlayer.responsive(true);
  myPlayer.controls(false);
  myPlayer.on('timeupdate', function(){
    console.log('the time was updated to: ' + myPlayer.currentTime());
   valu=seconds_times[current_question];
   console.log('the:   '+valu);
  cur_time= Number(myPlayer.currentTime() );
  updateGreenProgress(cur_time);
     if(cur_time>valu) {
        myPlayer.pause();
        
        loadQuiz()
    }

  });
});

    function updateGreenProgress(val)
    {
      percent=(val/total_time)*100;
      console.log(percent);
      $("#green_progress").css("width",percent+"%");
    }

    function loadQuiz()
    {
      //current_question =current_question+1;
      ht=prepareQuestion(current_question);
      $("#question_holder").html(ht);
      $("#question_holder").removeClass("hidden");

    }

    function loadNext()
    {
      $("#question_holder").addClass("hidden");    
      current_question=current_question+1;

      console.log(current_question);

      if(current_question==3)
      {
        clearInterval(OT_INTERVAL);
      }

      $("#indicator_"+current_question).removeClass("inactive");
      $("#indicator_"+current_question).addClass("activate");
      myPlayer.play();
    }

    function overallCounter_CB()
{
 
     OT_CB=OT_CB+1;  
      $("#time").text(OT_CB); 
  
    
}

    $("#play_pause").click(function(){
      isStart=isStart+1;
      if (isStart==1) 
      {
        OT_INTERVAL = window.setInterval(function() { overallCounter_CB(); }, 1000);
      }
      current_status=$(this).data("value");
      if (current_status=="paused")
       {
        myPlayer.play()
        $(this).data("value","playing");
        $(this).removeClass("play")
        $(this).addClass("pause")
       }
       else if(current_status=="playing")
       {
        myPlayer.pause()
         $(this).data("value","paused");
         //$(this).text("Paused")
         $(this).removeClass("pause")
        $(this).addClass("play")
       }

    })




var abbreviations=[
  {
    "question": {
      "id": "0",
      "title": "Offer open to which type of customer?",
      "answer_type": "single",
      "abb": "VAS",
      "bonus": "1"
    },
    "answers": [
      {
        "answer_text": "Prepay",
        "aid": "679",
        "status": "W"
      },
      {
        "answer_text": "All",
        "aid": "682",
        "status": "C"
      }
    ]
  },
  {
    "question": {
      "id": "1",
      "title": "Offer available at what frequency?",
      "answer_type": "single",
      "abb": "AMPU",
      "bonus": "1"
    },
    "answers": [
      {
        "answer_text": "Daily",
        "aid": "591",
        "status": "C"
      },
      {
        "answer_text": "Weekly",
        "aid": "592",
        "status": "W"
      }
      
    ]
  },
  {
    "question": {
      "id": "2",
      "title": "Can the data be transferred to another number?",
      "answer_type": "single",
      "abb": "AMPU",
      "bonus": "4"
    },
    "answers": [
      {
        "answer_text": "No",
        "aid": "612",
        "status": "C"
      },
      {
        "answer_text": "Yes",
        "aid": "640",
        "status": "W"
      }
     
    ]
  }
  
];

var TEMP_CHOICES_HOLDER=[];
 
var LETTERS=["A","B","C","D","E","F","G","H","I","J","K","L"];


    function prepareQuestion(question_id)
{
html_code="";


total_items=abbreviations.length
for (var i = 0; i <total_items; i++) 
   {
    questions=abbreviations[i].question;
    abbr=questions.abb;
    que=questions.title;
    cqid=questions.id;
    //console.log(abbr);
   // console.log(questions);
    if(question_id==cqid)
    {
      html_code='<div class="top_div"><div class="question">'+que+'</div><div class="choices">'

answers=abbreviations[i].answers;
                     answer_length=answers.length;

                      for (var x = 0; x < answer_length; x++) 
                         {
                           html_code=html_code+'<button  class="ans answer_holder"  data-is_selected="no" data-pos="1"   data-q="'+questions.id+'" data-a="'+answers[x].aid+'" data-qm="'+answers[x].status+'">'+answers[x].answer_text+'</button>';


                          
                          //console.log("--"+answers[x].answer_text);
                         }
                         html_code=html_code+'</div></div><div class="bottom_div"><button id="submit_answer" class="butty submit_bt" data-id="'+questions.id+'" >Submit Answer</button></div>'

                        

    }

  }

  //console.log(html_code);

  return html_code;
}



$('body').on('click', '.answer_holder', function(){
//  alert("")
   data_a=$(this).data("a");
   data_q=$(this).data("q");
   data_qp=$(this).data("qp");
   data_qm=$(this).data("qm");
    q_type=$(this).data("q_type");


   
      CURRENT_UA=data_q+"|"+data_a+"|"+data_qp+"|"+data_qm+"|S";
      is_selected=$(this).data("is_selected");
      //remove it if it was selected
      console.log(is_selected);
       if (is_selected=="yes") 
       {
        playTune("uncheck");
         const item_index = TEMP_CHOICES_HOLDER.indexOf(CURRENT_UA);
      if (item_index > -1) 
      {
        TEMP_CHOICES_HOLDER.splice(item_index, 1);
      }
        console.log(TEMP_CHOICES_HOLDER+"--SPLICED SINGLE")
        //user has clicked it...so uncheck it..remove from array
         $(this).removeClass("current_choice_selected");
       //  log("Removing checked")
         $(this).data("is_selected","no");

       }
       else
       {

        playTune("check");
        //remove all other choices
        TEMP_CHOICES_HOLDER=[];
        //ui uncheck
        $(".answer_holder").removeClass("current_choice_selected");
        $("#modal_"+data_q).find(".answer_holder").removeClass("current_choice_selected");
      $("#modal_"+data_q).find(".answer_holder").data("is_selected","no")

      //  $(this).removeClass("current_choice_selected");
        TEMP_CHOICES_HOLDER.push(CURRENT_UA);
//    log(TEMP_CHOICES_HOLDER+"--ADDED SINGLE")
    //check it...use has not clicked on it previously
      $(this).data("is_selected","yes");
     $(this).addClass("current_choice_selected");
       }

    
   

   
  
  
    

    

})

$('body').on('click', '.submit_bt', function(){
 // matrix_a.push(CURRENT_UA);
  //can try to send to db over here
  var proceed_status=processAnswers();
  if (proceed_status) 
  {
    send_ans_content=TEMP_CHOICES_HOLDER.join();
    //FINAL_HOLDER.push(send_ans_content);
  //  processRT(send_ans_content);
    setTimeout(
      function()
        {
          //$(this).removeClass("current_choice_selected");
          loadNext();
        },200); 
  }
  
  })

LOCKED_POINTS=0;

function processAnswers()
{
  var canProceed=false;
  num_choices=TEMP_CHOICES_HOLDER.length;
  if (num_choices<1) 
  {
    //use should atleast make a choice
   // alert("Please make atleast 1 choice");
    swal("Please make atleast 1 choice", "" , "info");
    playTune("wrong");
  }
  else
  {
    //user has already made a choice
    //loop through the array
    var temp_points=0;
    
    for (var i = 0; i < num_choices; i++) {
      composite_string=TEMP_CHOICES_HOLDER[i];
      var fields = composite_string.split('|');
      var current_a=fields[1];
      var current_q=fields[0];
      var current_status=fields[3];
      var q_type=fields[4];
      var current_qp=Number(fields[2]);
     // log(current_qp);
      if (current_status.toLowerCase()=="c") 
      {
      //  log(temp_points+" OPERATION PLUS"+current_qp);
        temp_points=temp_points+10;  
        myScore=myScore+10;
        $("#indicator_"+current_question).removeClass("activate");
     //   $("#indicator_"+current_question).addClass("success");
       // $("#indicator_"+current_question).removeClass("success");     
      }
      else
      {
       
      $("#indicator_"+current_question).removeClass("activate");
      //$("#indicator_"+current_question).addClass("failed");
         
      }
      $("#score").text(myScore);

      

     

    }

   


      LOCKED_POINTS=LOCKED_POINTS+temp_points;

    $(".display_score").text(LOCKED_POINTS);
    canProceed=true;
  }

   return canProceed;
} 


 function playTune(id) {
    var myAudio = document.getElementById(id);
     myAudio.volume = 1;

    return myAudio.play();
}

function togglePause(id) {
    var myAudio = document.getElementById(id);

     myAudio.pause();
    myAudio.currentTime = 0;
}
function playMuted(id) {
    var myAudio = document.getElementById(id);
    myAudio.volume = 0;

    return myAudio.play();
}
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);