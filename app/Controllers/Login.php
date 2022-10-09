<?php

namespace App\Controllers;


class Login extends BaseController
{
    public function getIndex()
    {
        return 'Hello World!';
    }
    public function getShoes($sandals, $id)
    {
        return $sandals . $id;
    }
    public function getComment()
    {
        return 'I am not flat!';
    }

    public function index()
    {
         return view('customer');
    }

    public function hello()
    {
      echo ' mon amour';
    }
  
}
