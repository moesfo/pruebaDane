<?php

$method = $_SERVER['REQUEST_METHOD'];

function response ($json){
	$a = json_encode($json);
	$msj =  array('mensaje' => 'mensaje recibido', 'objetorecibido' => 'json_encode($a)' );
	
	return json_encode($msj);

}
	

?>