<?php

// Problem: Lab code lost between pages
// Solution: Ensure session persistence

session_start();
$_SESSION['lab_code'] = $labCode;

// Or pass via hidden input
echo '<input type="hidden" name="lab_code" value="' . htmlspecialchars($labCode) . '">';