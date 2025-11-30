CREATE TABLE lab_tests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lab_code VARCHAR(50) UNIQUE,
    patient_id VARCHAR(50),
    requesting_doctor VARCHAR(200),
    clinical_summary TEXT,
    lmp DATE NULL,
    payment_status ENUM('PAID', 'NOT PAID', 'REJECTED'),
    test_status ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'REJECTED'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);