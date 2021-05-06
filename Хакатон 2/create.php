<?php

require_once 'connect.php';

$fio = $_POST[fio];
$mail = $_POST[mail];
$login = $_POST[login];
$password = $_POST[login];

mysqli_query($connect, "INSERT INTO `one` (`id`, `fio`, `mail`, `login`, `password`) VALUES (NULL, '$fio', '$mail', '$login', '$password')");


header('location: index.html');