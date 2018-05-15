<?php
   //Process a new form submission in HubSpot in order to create a new Contact.

$hubspotutk      = $_COOKIE['hubspotutk']; //grab the cookie from the visitors browser.
$ip_addr         = $_SERVER['REMOTE_ADDR']; //IP address too.
$hs_context      = array(
    'hutk' => $hubspotutk,
    'ipAddress' => $ip_addr,
    'pageUrl' => 'https://www.kreo.net/new',
    'pageName' => 'New Kreo page'
);
$hs_context_json = json_encode($hs_context);

//Need to populate these variable with values from the form.
$str_post =

      // "firstname=" . urlencode($firstname)
    // . "&lastname=" . urlencode($lastname)
     "&email=" . urlencode($_POST['subscribe'])
    // . "&phone=" . urlencode($phonenumber)
    // . "&company=" . urlencode($company)
    . "&hs_context=" . urlencode($hs_context_json); //Leave this one be

//replace the values in this URL with your portal ID and your form GUID
$endpoint = 'https://forms.hubspot.com/uploads/form/v2/3921830/cc913ba7-3c9f-4a71-bd65-bd26b360c28f';

$ch = @curl_init();
@curl_setopt($ch, CURLOPT_POST, true);
@curl_setopt($ch, CURLOPT_POSTFIELDS, $str_post);
@curl_setopt($ch, CURLOPT_URL, $endpoint);
@curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/x-www-form-urlencoded'
));
@curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response    = @curl_exec($ch); //Log the response from HubSpot as needed.
$status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE); //Log the response status code
@curl_close($ch);
echo $status_code . " " . $response;

?>
