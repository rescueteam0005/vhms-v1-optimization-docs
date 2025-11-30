<?php

  try {
      $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
} catch (PDOException $e) {
    error_log("SQL Error: " . $e->getMessage());
        error_log("SQL Query: " . $sql);
    error_log("Parameters: " . print_r($params, true));
}
