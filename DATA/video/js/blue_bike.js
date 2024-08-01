
/********** */
var VIDEO_HAD_BEGUN="NO";
var VIDEO_PLAY_TO=0;//Play video to max current_seconds;
var BUFFER=1;
var running_distance=0;
var running_distance_2=0;
diff=0;
current_diff=0;
var PLAYING_AT=0;
 initiated="not";
 pause_time=0;
 cur_time=0;

var vidlength=151;
var total_time=151;
var myPlayer;
var OT_CB=0;
var isStart=0;
var myScore=0;
current_question=0;
var pause_times=["0:15","0:30","0:50"];
var seconds_times=[];
var current_pos=0;
var  OT_INTERVAL ;

   VIDEO_STATUS="";

//player.autoplay('muted');
videojs('#my-video').ready(function(){
myPlayer= this;
myPlayer.fill(true);
myPlayer.responsive(true);
myPlayer.controls(false);
myPlayer.on('timeupdate', function(){
pause_time=VIDEO_PLAY_TO;

cur_time= Number(myPlayer.currentTime() );

console.log(VIDEO_STATUS+"===P");




  /*  if(cur_time>=pause_time) {
       // myPlayer.pause();
        VIDEO_STATUS="PAUSED";
        initiated="nope"
        //running_distance=running_distance_2;
    // loadQuiz()
   
    }
    else{
        VIDEO_STATUS="PLAYING";
    //    VIDEO_PLAY_TO
        if(initiated!="initiated")
        {
         //  myPlayer.play();
        initiated="initiated"; 
        }
        */

        
// pause_time>0
    PLAYING_AT=cur_time;
    current_diff=diff;
    //    console.log('Playing at:   '+cur_time+' 1-'+pause_time);
        updateGreenProgress(cur_time);
   // }


       

});
});

//WHEN TO PAUSE.. When playing distance has been same...ama imefika mwish0...

function updateGreenProgress(val)
{
  percent=(val/total_time)*100;
  //console.log(percent);
  $("#green_progress").css("width",percent+"%");
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

/*
document.addEventListener("contextmenu", function(e){
e.preventDefault();
}, false);

*/

/******** */

var started=0;
var startTime=300;

var expectedDistance=100;

 var OTR_INTERVAL ;
  var SCORE_INTERVAL ;
  var LIVE_CHECK = setInterval(function() { checkStatus(); }, 1000)
                

function checkStatus()
{

    $.ajax({
            type: "POST",
            url: "scripts/LOAD.php",
             dataType: 'json',
            success: function(server_response) {


                 bike1=server_response.bike1;
               //  bike2=server_response.bike2;
                 bike1=server_response.bike1;
                 game_status=server_response.game_status;
                 bike1_distance= server_response.bike1_distance;

              //   bike2_distance=server_response.bike2_distance

                 
                 
$(".bike1_panel1").html('<div class="level_panel flexit">'+bike1+'</div><div class="background_indicator bike1_panel1_indicator"></div>');
//$(".bike2_panel1").html('<div class="level_panel flexit">'+bike2+'</div><div class="background_indicator bike2_panel1_indicator"></div>');

displayUI(server_response)

                  // $(".bike_1_details").html('<span class="player_name">'+server_response.bike1+'</span><br><span class="distance" id="bike_1_distance">'+server_response.bike1_distance+"m")

                  //  $(".bike_2_details").html('<span class="player_name">'+server_response.bike2+'</span><br><span class="distance" id="bike_2_distance">'+server_response.bike2_distance+"m")

                     if (game_status==1) {
                         clearInterval(LIVE_CHECK);

                         if (!SCORE_INTERVAL) {
                             SCORE_INTERVAL = setInterval(function() { getValues(); }, 500)
                             OTR_INTERVAL = setInterval(function() { updateSec(); }, 1000);
                         }
                     }

            }
        });

}



function overallCounter()
{
startTime=startTime-1;
$("#start_button").html(startTime); 
}

function getValues()
{

    $.ajax({
            type: "POST",
            url: "scripts/DATA.php",
             dataType: 'json',
             beforeSend: function() {
                //$('#bounce').show('fast');
            },
            success: function(server_response) {
               
                 response=server_response;
              
               
                // console.log(response.bike2_time);
                 displayUI(response)

               //  expectedDistance=200;

              

            /*     if (bike2_distance>1000 || bike1_distance>1000) 
                 {
                     //we have a winner stop and reveal
                         if(bike1_distance>bike2_distance)
                         {
                             //alert(bike1+" WINS")
                             $(".indicator_bike_1").addClass("green")
                         }
                         else if(bike2_distance>bike1_distance){
                             //alert("DRAW")
                         //	alert(bike2+" WINS")

                             $(".indicator_bike_2").addClass("green")

                         }
                         else{
                             alert("DRAW")
                         }
                          stopTimer();
                         stopBikes()
                 }
                 else{

                      bike1=(bike1_distance/expectedDistance)*100;

                     bike2=(bike2_distance/expectedDistance)*100;

                      if (bike1>100) 
                        {
                            bike1=100;
                        }

                        if (bike2>100) 
                        {
                            bike2=100;
                        } 
                    $(".bike_1_details").html('<span class="player_name">'+response.bike1+'</span><br><span class="distance" id="bike_1_distance">'+response.bike1_distance+"m")

                    $(".bike_2_details").html('<span class="player_name">'+response.bike2+'</span><br><span class="distance" id="bike_2_distance">'+response.bike2_distance+"m")

                 }
                 */



                
              //  $(".indicator_bike_2").html(response.bike2+"<br>"+response.bike2_distance+"m<br>"+response.bike2_time+"sec")


               //  $(".indicator_bike_1").css("height",bike1+"%");
                // $(".indicator_bike_2").css("height",bike2+"%");

               

                //paintDisplay(percent_covered);                   
            }
        });

}

function paintDisplay(percent,container)
{
    $(container).css("height",percent+"%")
}



$('body').on('click', '#counter_x', function(){

$.ajax({
            type: "POST",
            url: "scripts/startBikes.php",
   
            dataType: 'json',
            beforeSend:  function() {
            //$('#bounce').show('fast');
           // console.log("server_response")
            $("#counter_x").text("...");
            },
            success: function(server_response)
            {
              response=server_response;
            
                 if (response==1) 
                {
                       OTR_INTERVAL = setInterval(function() { updateSec(); }, 500);
                       SCORE_INTERVAL = setInterval(function() { getValues(); }, 1000)
                }
                else 
                {

                    
                }
 
             },
             complete: function(){
                //$("#start_hunt").text("Submitting...");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
              }

            });





});


function displayUI(response){


   //bike2_distance=Number(response.bike2_distance);
                 bike1_distance=Number(response.bike2_distance);

                 $("#score").text(bike1_distance+" m")
                 console.log(bike1_distance);

              

                 VIDEO_PLAY_TO=bike1_distance*vidlength/1000;
                 pause_time=Number(VIDEO_PLAY_TO);



              //   console.log(VIDEO_PLAY_TO+" - "+VIDEO_HAD_BEGUN+" - "+bike1_distance+" - "+vidlength)
//diff=Number(pause_time-cur_time);
                 interval=0;
diff=Number(bike1_distance-running_distance);
if (diff==0 ) 
{
   /* interval=setTimeout(function(args) {
        // body
        console.warn("delay started")
        myPlayer.pause()
    }, 2000)
    */
    myPlayer.pause()
   
   initiated="not";
    
}
else{
     //resume playing
    //clearInterval(interval);
    console.warn("delay ended")
    running_distance=bike1_distance;
    if (initiated=="initiated")
     {
        
         console.warn(bike1_distance+" --ALREADY DONE "+running_distance) 
         
     }
     else{
         myPlayer.play();
         initiated="initiated";
        console.warn(bike1_distance+" --JUST INITIATED "+running_distance)
        // initiated="initiated";
     }
    

  
}

console.warn(diff+" --DIFF")




}

function loadMatrix()
{
takeMeTo(".boxes_holder", ".matrix_wall");


}

function playTune(id) {
var myAudio = document.getElementById(id);
 myAudio.volume = 1;
return myAudio.play();
}

function pauseTune(id) {
var myAudio = document.getElementById(id);
 myAudio.pause();
myAudio.currentTime = 0;
}
function playMuted(id) {
var myAudio = document.getElementById(id);
myAudio.volume = 0;
return myAudio.play();
}



function takeMeTo(current_loc,next_loc){

var dis=$(current_loc);
      out_anime="fadeOut";  
      dis.removeClass(out_anime + ' animated').addClass(out_anime + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      dis.removeClass(out_anime + ' animated');
      dis.addClass("hidden"); 

    });

       in_anime="fadeIn";
       var dis2=$(next_loc);
       dis2.removeClass("hidden");
            dis2.removeClass(in_anime + ' animated').addClass(in_anime + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              dis2.removeClass(in_anime + ' animated');
               dis.removeClass(out_anime);
             // dis.addClass("hidden"); 

      });
            return true;


}





function stopTimer() {
window.clearInterval(OTR_INTERVAL);
}

var OT=0;
function overallCounter()
{
OT=OT+1;
$("#counter_x").html(OT); 
}

function updateSec() {
sec=startTime;
sec= Number(sec);
if (sec >200) {
  $("#counter_x").html(sec);     //red
  $("#counter_x").addClass('green');
}
else if(sec < 200 && sec >50)
{
$("#counter_x").html(sec);
$("#counter_x").addClass('amber');
}
else if(sec < 50)
{
$("#counter_x").html(`&nbsp${sec}`);
$("#counter_x").addClass('red');
}

if (sec < 1) {
  stopTimer();
  //show answer and proceed
  stopBikes();
}

// sec=sec-1;
startTime=startTime-1;
}

function stopBikes()
{

    $.ajax({
            type: "POST",
            url: "scripts/stopBikes.php",
           
            dataType: 'json',
            beforeSend:  function() {
           // $("#start_button").text("...");
            },
            success: function(server_response)
            {
              response=server_response;
              // $("#start_button").text("Submit");
              if (response=="1") 
              {
                  clearInterval(SCORE_INTERVAL);


                  setTimeout(function() {
                      location.reload();
                  }, 2000)
              }
            
 
             },
             complete: function(){
                //$("#start_hunt").text("Submitting...");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
              }

            });

}
