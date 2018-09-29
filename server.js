'use strict';
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(cors()); 

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const axios = require('axios')

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }



// let fs = require('fs');
// let https = require('https');
// let url = require('url');

// let subscriptionKey = '9d98aeeda45d4249b9bc791f39458110';
// let host = 'api.cognitive.microsofttranslator.com';
// let path = '/translate?api-version=3.0';
// let params = '&to=hi';

// let text = 'Hello, world!';

app.get('/api' , (req , res)=> {
    res.send('hey react');
    res.end();
})

app.post('/hello', (req, res)=> {
    console.log(req.body);
    res.send('data got')
})

app.listen(port, () => console.log(`Listening on port ${port}`));




// app.get('/api/hello', (req, res) => {
//     console.log('hello theere');
    
//     let response_handler = function (response) {
//         let body = '';
//         console.log(response);
//         response.on('data', function (d) {
//             body += d;
//         });
//         response.on('end', function () {
//             console.log(response.url);
//             let json = JSON.stringify(JSON.parse(body), null, 4);
//             console.log(json);
//         });
//         response.on('error', function (e) {
//             console.log('Error: ' + e.message);
//         });
//     };

//     let get_guid = function () {
//         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//             var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//             return v.toString(16);
//         });
//     }

//     let Translate = function (content) {
//         let request_params = {
//             method: 'POST',
//             hostname: host,
//             path: path + params,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Ocp-Apim-Subscription-Key': subscriptionKey,
//                 'X-ClientTraceId': get_guid(),
//             }
//         };

//         let req = https.request(request_params, response_handler);
//         req.write(content);
//         /*console.log(url.parse(req.url).pathname);*/
//         //console.log(req);
//         req.end();
//     }
//     let content = JSON.stringify([{ 'Text': text }]);
//     //res.send(content);

//     // axios.post('http://localhost:5000/api/hello', {
//     //     content
//     // })
//     // .then(response => { 
//     //     console.log(response)
//     // })
//     // .catch(error => {
//     //     console.log(error.response)
//     // });
// });
