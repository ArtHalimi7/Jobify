<<<<<<< HEAD
<?php
session_start();

if(isset($_SESSION['user_id']))
{
	unset($_SESSION['user_id']);

}
header("Location: login.php");
=======
<?php
session_start();

if(isset($_SESSION['user_id']))
{
	unset($_SESSION['user_id']);

}
header("Location: login.php");
>>>>>>> 1d3488bc7f6b6ee5eb2933f4d8cdaf8e78d32e19
die;