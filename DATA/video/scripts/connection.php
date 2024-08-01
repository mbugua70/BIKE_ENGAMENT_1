 <?php
  //error_reporting(0);
 /*$host_name = 'db603034447.db.1and1.com';
$database = 'db603034447';
$user_name = 'dbo603034447';
   $password   = "liverpool#1"; 
 */ 

$host_name="localhost";
$user_name="root";
$password="";
$database="saff_mines_trivia";  

    date_default_timezone_set('Africa/Nairobi');
               $date = date('d-m-Y');
               $time = date('H:i a');             
                $finalTime=$date."<br>".$time;
    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
 ?>