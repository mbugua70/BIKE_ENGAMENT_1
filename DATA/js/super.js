flashStore=window.localStorage;
$('body').on('click', '#start_hunt', function(){

sel= "-";
ba_name= $("#ba_name").val();
ba_phone= $("#ba_phone").val();
name= $("#name").val();
phone= $("#phone").val();
game= "-";
product= "-";
age= $("#age").val();
points= "-";
merchandise= "-";
   
    if (age=="") 
 {
  swal({
  title: "Age is required",
  text: "Please Choose Participant age",
  icon: "error"
});
 }
  else if (product=="") 
 {
  swal({
  title: "Product Is Required",
  text: "Please Choose Product",
  icon: "error"
});
 }
   else if (name=="") 
 {
  swal({
  title: "Name Is Required",
  text: "Please Input Customer's Name",
  icon: "error"
});
 }
else  if (phone=="") 
 {
  swal({
  title: "Email Is Required",
  text: "Please Email Address",
  icon: "error"
});
 }
 else if (game=="") 
 {
  swal({
  title: "Game  Is Required",
  text: "Please Choose Game Participated",
  icon: "error"
});
 }

  else if (points=="") 
 {
  swal({
  title: "Points Scored",
  text: "Please Enter Points Scored",
  icon: "error"
});
 }

       else if (merchandise=="") 
 {
  swal({
  title: "Merchandise is required",
  text: "Merchandise Given is required",
  icon: "error"
});
 }

 else
 {
  data="name="+name+"&phone="+phone+"&product="+product+"&game="+game+"&merchandise="+merchandise+"&points="+points+"&ba_name="+ba_name+"&ba_phone="+ba_phone+"&age="+age;
  $.ajax({
                type: "POST",
                url: "scripts/new_player.php",
                data: data,
                dataType: 'json',
                beforeSend:  function() {
                //$('#bounce').show('fast');
               // console.log("server_response")
                $("#start_hunt").text("Submitting...");
                },
                success: function(server_response)
                {
                  response=server_response.response;
                   $("#start_hunt").text("Submit");
                 // logos=server_response.name;
                  
                     if (response==1) 
                    {
                    //  $("#start_hunt").text("Submit");

                      
                      swal({
                          title: "Player Registered",
                          text: "",
                          icon: "success"
                          });

             

                    }
                    else if(response=="limit")
                    {
                    //  $("#start_hunt").text("Success...");

                      swal({
                          title: "Phone Already Captured",
                          text: "",
                          icon: "error"
                          });
                     
                      
                    }
                    
                    else if(response==3)
                    {

                      swal({
                          title: "System Error",
                          text: "Please contact Admin",
                          icon: "error"
                          });
                        
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

  
 

});





flashStore=window.localStorage;
$('body').on('click', '#bikeload', function(){
bike1= $("#bike1").val();
bike2= $("#bike2").val();

   
    if (bike1=="") 
 {
  swal({
  title: "Bike 1",
  text: "Please Choose Bike 1 Player",
  icon: "error"
});
 }
  else if (bike2=="") 
 {
  swal({
  title: "Bike 2",
  text: "Please Choose Bike 2 Player",
  icon: "error"
});
 }
 

 else
 {
  data="bike1="+bike1+"&bike2="+bike2;
  $.ajax({
                type: "POST",
                url: "scripts/loadPlayers.php",
                data: data,
                dataType: 'json',
                beforeSend:  function() {
                //$('#bounce').show('fast');
               // console.log("server_response")
                $("#start_hunt").text("Submitting...");
                },
                success: function(server_response)
                {
                  response=server_response.response;
                   $("#start_hunt").text("Submit");
                 // logos=server_response.name;
                  
                     if (response==1) 
                    {
                    //  $("#start_hunt").text("Submit");

                      
                      swal({
                          title: "Players Loaded",
                          text: "",
                          icon: "success"
                          });

             

                    }
                    else if(response=="limit")
                    {
                    //  $("#start_hunt").text("Success...");

                      swal({
                          title: "Phone Already Captured",
                          text: "",
                          icon: "error"
                          });
                     
                      
                    }
                    
                    else if(response==3)
                    {

                      swal({
                          title: "System Error",
                          text: "Please contact Admin",
                          icon: "error"
                          });
                        
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

  
 

});

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


     function prefill()
    {
      
         name= flashStore.getItem("name");
          phone=flashStore.getItem("phone");
         
      if (!name||!phone) 
      {
        swal("Please Register","Register to send Data","error")
        setTimeout(function(){
          location.href="registration.html";
        },2000)
      }
      else
      {
         
          $("#ba_name").val(name);
          $("#ba_phone").val(phone);
         
         

          $("#rba_name").text(name);
          $("#rba_phone").text(phone);
       
      }
         
          

    }


