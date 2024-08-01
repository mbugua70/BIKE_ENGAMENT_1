 <?php
  //error_reporting(0);
$host_name="localhost";
$user_name="root";
$password="";
$database="arduino";

    date_default_timezone_set('Africa/Nairobi');
               $date = date('Y-m-d');
               $time = date('H:i');             
                $finalTime=$date."<br>".$time;
    $connect = mysqli_connect($host_name, $user_name, $password, $database);
    if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
 ?>