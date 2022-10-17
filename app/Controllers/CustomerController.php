<?php namespace App\Controllers;

use CodeIgniter\Controller;
use App\Models\CustomerModel;

class CustomerController extends Controller
{
    
    protected $customer;
    protected $request;

    public function __construct()
    {
        $this->client = new CustomerModel();
        $this->request = \Config\Services::request();
    }

    public function index()
    {
        return view('customer');
    }

    public function test()
    {
        $data = $this->client->findAll();
        return json_encode($data);
    }

    public function create()
    {
        try {
            $json = $this->request->getJSON();
            $insert['nomClient'] = $json->nomClient;
            $insert['prenomClient'] = $json->prenomClient;
            $insert['telephoneClient'] = $json->telephoneClient;
            $insert['emailClient'] = $json->emailClient;
            $insert['adresseClient'] = $json->adresseClient;
            $res = $this->client->insert($insert);
            $response['success'] = true;
            $response['message'] = "Bien enregistre";

            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }
}
