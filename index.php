<?php

use App\Class\Home;

require_once __DIR__ . '/vendor/autoload.php';

$home = Home::index();
echo $home;
