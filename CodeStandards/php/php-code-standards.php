<?php
/**
 * File: patient-unifier.php
 * Description: Eliminates duplicate patient records
 * Author: Cyber-Lord Development Team
 * Date: 2024
 */

// Database connection
require_once '../config/database.php';

class PatientUnifier {
    private $pdo;
    
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    
    /**
     * Remove duplicate patients based on patient_id
     * @return int Number of duplicates removed
     */
    public function removeDuplicates() {
        $sql = "
            DELETE p1 FROM patients p1
            INNER JOIN patients p2 
            WHERE p1.id > p2.id 
            AND p1.patient_id = p2.patient_id
        ";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        
        return $stmt->rowCount();
    }
}