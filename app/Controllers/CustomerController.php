<?php namespace App\Controllers;

use CodeIgniter\Controller;
use App\Models\CustomerModel;

class CustomerController extends Controller
{
    
    protected $customer;

    public function __construct()
    {
        $this->customer = new CustomerModel();
    }

    public function index()
    {
        return view('customer');
    }

    public function test()
    {
        $data = $this->customer->findAll();
        return json_encode($data);
    }
}
