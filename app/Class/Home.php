<?php

namespace App\Class;

use App\Class\Page;
use App\Utils\View;

class Home extends Page
{
    public function __construct()
    {
    }

    public static function index()
    {
        $content = View::render('pages/index', [
            'title' => 'Home',
            'brand' => 'Banda Safari'
        ]);

        return self::page($content);
    }
}
