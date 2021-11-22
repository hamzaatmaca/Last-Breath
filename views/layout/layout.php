<?php 
function router($src){
	include './views/components/header.php';
	include './views/components/navbar.php';
	include './views/pages/'.$src.'.php';
	include './views/components/footer.php';
}
?>