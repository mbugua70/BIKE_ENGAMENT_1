<!DOCTYPE html>
<?php
require("scripts/connection.php");
?>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>DATA-ENTRY</title>

	<link rel="stylesheet" href="css/animate.css">
		<link rel="stylesheet" href="css/superpower.css?24234344656">
		
	  <meta name="viewport" content="width=device-width,initial-scale=1">
	  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
	  <link rel="stylesheet" href="css/fontawesome.css">
</head>
<body>
	<div class="overall_container">
		
	
	<div class="home  ">

		 <div class="formy ">
		 	<div class="info_box">
		 		<div class="info_holder">Sending Data as: </div>
		 		<div class="info_holder" id="rba_name">Johnn Doe</div>
		 		<div class="info_holder" id="rba_phone">0726410868</div>
		 		<div class="info_holder"><a href="registration.html">Edit</a></div>
		 	</div>
		 	
            <br>
      
          <select  class="input" name="bike1" id="bike1">
          	<option>BIKE 1</option>
          	<?php 

$res=mysqli_query($connect,"SELECT *  FROM player ORDER BY name ASC") or die(mysqli_error($connect)); 
$i=0;
		 	while($row=mysqli_fetch_array($res))
 {
 	$i++;
 	$name=$row['name'];
 	?>
 	<option value="<?php echo $name; ?>"><?php echo $name; ?></option>
 	<?php
 }
          	?>
          </select>
          <br>

          <select  class="input" name="bike2" id="bike2">
          	<option>BIKE 2</option>
          	<?php 

$res=mysqli_query($connect,"SELECT *  FROM player ORDER BY name ASC") or die(mysqli_error($connect)); 
$i=0;
		 	while($row=mysqli_fetch_array($res))
 {
 	$i++;
 	$name=$row['name'];
 	?>
 	<option value="<?php echo $name; ?>"><?php echo $name; ?></option>
 	<?php
 }
          	?>
          </select>
         
            <br>
          <button id="bikeload" class="butty">LOAD </button>
          	<button id="counter_x" class="top_timer">300</button>

        </div>
		
	</div>

	
	</div>



<div class="xx" id="DISP"></div>



  <script src='js/jquery.js'></script>
  <script src="js/sweet.js"></script>
  <script src="js/super.js?654654664646"></script>

   <script type="text/javascript">
		//prefill();
  </script>

  <script type="text/javascript">
  	
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
                url: "LOAD.php",
                 dataType: 'json',
                success: function(server_response) {


                     bike1=server_response.bike1;
                     bike2=server_response.bike2;
                     bike1=server_response.bike1;
                     game_status=server_response.game_status;
                     bike1_distance= server_response.bike1_distance;
                     bike2_distance=server_response.bike2_distance

                     
                     
 $(".bike1_panel1").html('<div class="level_panel flexit">'+bike1+'</div><div class="background_indicator bike1_panel1_indicator"></div>');
  $(".bike2_panel1").html('<div class="level_panel flexit">'+bike2+'</div><div class="background_indicator bike2_panel1_indicator"></div>');

 //displayUI(server_response)

                      // $(".bike_1_details").html('<span class="player_name">'+server_response.bike1+'</span><br><span class="distance" id="bike_1_distance">'+server_response.bike1_distance+"m")

                      //  $(".bike_2_details").html('<span class="player_name">'+server_response.bike2+'</span><br><span class="distance" id="bike_2_distance">'+server_response.bike2_distance+"m")

                         if (game_status==1) {
                         	clearInterval(LIVE_CHECK);

                         	if (!SCORE_INTERVAL) {
                         		SCORE_INTERVAL = setInterval(function() { getValues(); }, 333)
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
                url: "DATA.php",
                 dataType: 'json',
                 beforeSend: function() {
                    //$('#bounce').show('fast');
                },
                success: function(server_response) {
                   
                     response=server_response;
                  
                     console.log(response.bike1_distance);
                     console.log(response.bike2_distance);
                     console.log(response.bike1);
                     console.log(response.bike2);
                     console.log(response.bike1_time);
                     console.log(response.bike2_time);
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
                url: "startBikes.php",
       
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
   						OTR_INTERVAL = setInterval(function() { updateSec(); }, 1000);
   						SCORE_INTERVAL = setInterval(function() { getValues(); }, 333)
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


       bike2_distance=Number(response.bike2_distance);
                     bike1_distance=Number(response.bike1_distance);

                     if (bike1_distance>100) 
                     {
                       $(".bike1_panel1").addClass('green'); 
                       
                     }

                     if (bike1_distance>200) 
                     {
                       $(".bike1_panel2").addClass('green'); 
                     }
                     if (bike1_distance>300) 
                     {
                       $(".bike1_panel3").addClass('green'); 
                     }
                     if (bike1_distance>400) 
                     {
                       $(".bike1_panel4").addClass('green'); 
                     }
                     if (bike1_distance>500) 
                     {
                       $(".bike1_panel5").addClass('green'); 
                     }


                     if (bike2_distance>100) 
                     {
                       $(".bike2_panel1").addClass('green'); 
                     }

                     if (bike2_distance>200) 
                     {
                       $(".bike2_panel2").addClass('green'); 
                     }
                     if (bike2_distance>300) 
                     {
                       $(".bike2_panel3").addClass('green'); 
                     }
                     if (bike2_distance>400) 
                     {
                       $(".bike2_panel4").addClass('green'); 
                     }
                     if (bike2_distance>500) 
                     {
                       $(".bike2_panel5").addClass('green'); 
                     }

                     console.log(bike1_distance)


                     if (bike1_distance >=0 && bike1_distance<=100) 
                     {
                        current_distance=bike1_distance-0;
                        //lightup 1
                        $(".bike1_panel1").html('<div class="level_panel flexit">'+bike1+'</div><div class="background_indicator bike1_panel1_indicator"></div>');

                        percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike1_panel1_indicator")
                     }
                     else{
                         $(".bike1_panel1").html('');
                     }
                      if (bike1_distance >100 && bike1_distance<=200) 
                     {
                        //lightup 1
                        current_distance=bike1_distance-100;
                        $(".bike1_panel2").html('<div class="level_panel flexit">'+bike1+'</div><div class="background_indicator bike1_panel2_indicator"></div>');
                         percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike1_panel2_indicator")
                     }
                     else{
                        $(".bike1_panel2").html('');
                     }
                      if (bike1_distance >200 && bike1_distance<=300) 
                     {
                        //lightup 1
                        current_distance=bike1_distance-200;
                        $(".bike1_panel3").html('<div class="level_panel flexit">'+bike1+'</div><div class="background_indicator bike1_panel3_indicator"></div>');
                         percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike1_panel3_indicator")
                     }
                     else{
                        $(".bike1_panel3").html('');

                     }
                      if (bike1_distance >300 && bike1_distance<=400) 
                     {
                        //lightup 1
                        current_distance=bike1_distance-300;
                        $(".bike1_panel4").html('<div class="level_panel flexit">'+bike1+'</div><div class="background_indicator bike1_panel4_indicator"></div>');
                         percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike1_panel4_indicator")
                     }
                     else{
                         $(".bike1_panel4").html('');
                     }
                      if (bike1_distance >400 && bike1_distance<=500) 
                     {
                        //lightup 1
                        current_distance=bike1_distance-400;
                         $(".bike1_panel5").html('<div class="level_panel flexit">'+bike1+'</div><div class="background_indicator bike1_panel5_indicator"></div>');
                          percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike1_panel5_indicator")

                     }
                     else{

                         $(".bike1_panel5").html('');

                     }



                     if (bike2_distance >=0 && bike2_distance<=100) 
                     {
                        //lightup 1
                        current_distance=bike2_distance-0;
                        $(".bike2_panel1").html('<div class="level_panel flexit">'+bike2+'</div><div class="background_indicator bike2_panel1_indicator"></div>');
                        percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike2_panel1_indicator")
                     }
                     else{
                         $(".bike2_panel1").html('');
                     }
                      if (bike2_distance >100 && bike2_distance<=200) 
                     {
                        //lightup 1
                        current_distance=bike2_distance-100;
                        $(".bike2_panel2").html('<div class="level_panel flexit">'+bike2+'</div><div class="background_indicator bike2_panel2_indicator"></div>');
                        percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike2_panel2_indicator")
                     }
                     else{
                        $(".bike2_panel2").html('');
                     }
                      if (bike2_distance >200 && bike2_distance<=300) 
                     {
                        //lightup 1
                        current_distance=bike2_distance-200;
                        $(".bike2_panel3").html('<div class="level_panel flexit">'+bike2+'</div><div class="background_indicator bike2_panel3_indicator"></div>');
                        percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike2_panel3_indicator")
                     }
                     else{
                        $(".bike2_panel3").html('');

                     }
                      if (bike2_distance >300 && bike2_distance<=400) 
                     {
                        //lightup 1
                        current_distance=bike2_distance-300;
                        $(".bike2_panel4").html('<div class="level_panel flexit">'+bike2+'</div><div class="background_indicator bike2_panel4_indicator"></div>');
                        percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike2_panel4_indicator")
                     }
                     else{
                         $(".bike2_panel4").html('');
                     }
                      if (bike2_distance >400 && bike2_distance<=500) 
                     {
                        //lightup 1
                        current_distance=bike2_distance-400;
                         $(".bike2_panel5").html('<div class="level_panel flexit">'+bike2+'</div><div class="background_indicator bike2_panel5_indicator"></div>');
                         percent=(current_distance/expectedDistance)*100;
                        paintDisplay(percent,".bike2_panel5_indicator")

                     }
                     else{

                         $(".bike2_panel5").html('');

                     }


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
                url: "stopBikes.php",
               
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


  </script>

</body>
</html>