<?php
$con = mysqli_connect("localhost", "root", "", "Floricultura"); //servidor, cliente, senha, banco de dados
//$con = mysqli_connect("localhost", "root", "&reCH1m", "Floricultura");
mysqli_set_charset($con, 'utf-8'); //variável de conexão, formatação para aceitar acentos do português

if(mysqli_connect_error()){
    echo 'Erro na conexão com o Banco de Dados. '.mysqli_connect_error();
}//verificação de algum possível erro de conexão
?>