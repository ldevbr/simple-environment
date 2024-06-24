<?php

namespace App\Class;

use App\Utils\View;

class Page
{
    public function __construct()
    {
    }

    public static function page($content)
    {
        return View::render('pages/page', [
            'title' => 'Titulo',
            'content' => $content,
        ]);
    }
}
