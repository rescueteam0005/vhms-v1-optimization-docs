<?php
// api/lab/results/delete.php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$ids = $data['ids'];

$placeholders = implode(',', array_fill(0, count($ids), '?'));
$stmt = $pdo->prepare("DELETE FROM lab_results WHERE id IN ($placeholders)");
$stmt->execute($ids);

echo json_encode([
  'success' => true,
  'deleted_count' => $stmt->rowCount(),
]);
