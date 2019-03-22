const Request = require('request');

Request.put({
    url: 'http://127.0.0.1:3000/store/test_speed',
    json: {was: "ich will"}
}, putAntwort);

function putAntwort(error, response, body){
    Request.get({
        url: "http://127.0.0.1:3002/store/test_speed",
        json: true
    }, getAntwort)
}

function getAntwort(error, response, body){
    console.log(body.was);
}