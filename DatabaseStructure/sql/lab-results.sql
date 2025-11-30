CREATE TABLE lab_results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lab_code VARCHAR(50),
    test_name VARCHAR(200),
    result_value VARCHAR(500),
    normal_range VARCHAR(100),
    result_date TIMESTAMP,
    verified_by VARCHAR(200),
    FOREIGN KEY (lab_code) REFERENCES lab_tests(lab_code)
);
