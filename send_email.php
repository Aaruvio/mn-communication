<?php
// ... (PHP code for security checks) ...

    // --- 1. Collect form data securely ---
    // Ensure these keys match the 'name' attributes in the HTML
    $company_name = htmlspecialchars(trim($_POST['company_name'])); 
    $contact_email = htmlspecialchars(trim($_POST['contact_email']));
    $phone_number = htmlspecialchars(trim($_POST['phone_number']));
    $event_type = htmlspecialchars(trim($_POST['event_type']));
    $event_description = htmlspecialchars(trim($_POST['event_description']));

// ... (rest of the PHP email sending code) ...
?>