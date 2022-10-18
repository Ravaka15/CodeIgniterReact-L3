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

    public function list()
    {
        try {
            $data = $this->client->findAll();
            $response['data'] = $data;
            $response['success'] = true;
            $response['message'] = "Successful load";
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }

    public function get($idClient)
    {
        try {
            $data = $this->client->find($idClient);
            if ($data) {
                $response['data'] = $data;
                $response['success'] = true;
                $response['message'] = "Successful load";
            }
            else {
                $response['success'] = false;
                $response['message'] = "Not found data";
            }
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
    }

    public function update($idClient)
    {
        try {
            $json = $this->request->getJSON();
            $update['nomClient'] = $json->nomClient;
            $update['prenomClient'] = $json->prenomClient;
            $update['telephoneClient'] = $json->telephoneClient;
            $update['emailClient'] = $json->emailClient;
            $update['adresseClient'] = $json->adresseClient;
            $res = $this->client->update($idClient,$update);
            $response['res'] = $res;
            $response['success'] = true;
            $response['message'] = "Successful update $idClient ";
            return json_encode($response);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = $e->getMessage();
            return json_encode($response);
        }
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
