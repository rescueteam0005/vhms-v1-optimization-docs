-- Add indexes for frequently queried columns
CREATE INDEX idx_patient_id ON patients(patient_id);
CREATE INDEX idx_lab_code ON lab_tests(lab_code);
CREATE INDEX idx_payment_status ON lab_tests(payment_status);
CREATE INDEX idx_created_at ON lab_tests(created_at DESC);
