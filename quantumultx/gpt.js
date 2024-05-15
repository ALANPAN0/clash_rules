console.log(response);
var body = $response.body;
body = JSON.parse(body);
console.log(body);
if (body.hasOwnProperty('gateValue')) {
    body['gateValue'] = "true";
}

if (body.hasOwnProperty('value')) {
    body['value'] = true;
}
console.log(body);
body = JSON.stringify(body);
$done({body});