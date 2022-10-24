<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        return view('customer');
    }

    public function hello()
    {
      echo 'Hello mon amour';
    }

}
