<?php
// api/lab/results/update.php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$lab_code = $data['lab_code'];
$results = $data['results'];

// Bulk update logic
$updated = 0;
foreach ($results as $result) {
  $stmt = $pdo->prepare("
        UPDATE lab_results 
        SET result_value = ?, normal_range = ?
        WHERE id = ? AND lab_code = ?
    ");
  $stmt->execute([
    $result['result_value'],
    $result['normal_range'],
    $result['id'],
    $lab_code,
  ]);
  $updated += $stmt->rowCount();
}

echo json_encode([
  'success' => true,
  'updated_count' => $updated,
]);
