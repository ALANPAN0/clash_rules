var body = $response.body;
body = JSON.parse(body);

if (body.hasOwnProperty('gateValue')) {
    body['gateValue'] = "true";
}

if (body.hasOwnProperty('value')) {
    body['value'] = true;
}

body = JSON.stringify(body);
$done({body});