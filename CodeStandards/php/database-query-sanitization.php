<?php

// ❌ WRONG - SQL Injection vulnerable
$sql = "SELECT * FROM patients WHERE id = " . $_GET['id'];

// ✅ CORRECT - Safe
$stmt = $pdo->prepare("SELECT * FROM patients WHERE id = ?");
$stmt->execute([$_GET['id']]);