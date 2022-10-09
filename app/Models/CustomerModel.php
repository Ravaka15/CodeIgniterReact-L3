<?php namespace App\Models; 

use CodeIgniter\Model;

class CustomerModel extends Model 

{

    protected $table = "client";

    protected $primaryKey = "idClient";

    protected $returnType = "array";
  

    protected $allowedFields = [
        'nomClient',
        'prenomClient',
        'telephoneClient',
        'emailClient',
        'adresseClient'
    ];

    protected $useTimeStamps = true;

    protected $createField = "creeA";

    protected $updatedField = "modifierA";
     
    protected $deleted_at = "supprimerA";

    protected $useSoftDeletes = false;
}