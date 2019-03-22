const Request = require("request");

Request.put({url: "http://127.0.0.1:3000/store/test_3put", json:{server: 1}});
Request.put({url: "http://127.0.0.1:3001/store/test_3put", json:{server: 2}});
Request.put({url: "http://127.0.0.1:3002/store/test_3put", json:{server: 3}});

setTimeout(getAllThree, 5000); //in 500 ms wird getAllThree() aufgerufen

function getAllThree(){
    Request.get({url: "http://127.0.0.1:3000/store/test_3put", json:true}, showResponse);
    Request.get({url: "http://127.0.0.1:3001/store/test_3put", json:true}, showResponse);
    Request.get({url: "http://127.0.0.1:3002/store/test_3put", json:true}, showResponse);
}

function showResponse(error, response, body){
    console.log(body);
}