<?php 
include './views/layout/layout.php';

if(!empty($_GET['url'])){
	$url = $_GET['url'];

switch ($url) {
	case '/':
		router($url);
		break;
	case 'clock':
		router($url);
		break;
	case 'result':
		router($url);
		break;
	default:
		router($url);
		break;
}


}else{
	router('clock');
}


 ?>