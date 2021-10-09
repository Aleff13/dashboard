<?php
// recebe os valores da requisição POST
//$array=json_decode($_POST['jsondata']);


$elements = $_POST['elements'];
$elements = explode(',', $elements);

var_dump($elements);



    