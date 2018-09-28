'use strict';
const express = require('express');

const app = express();
const port = process.env.PORT || 5003;

let fs = require('fs');
let https = require('https');
let url = require('url');

let subscriptionKey = '9d98aeeda45d4249b9bc791f39458110';
let host = 'api.cognitive.microsofttranslator.com';
let path = '/translate?api-version=3.0';
let params = '&to=de&to=it';

let text = 'Hello, world!';

app.get('/api/hello', (req, res) => {
    let response_handler = function (response) {
        let body = '';
        console.log(response);
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            console.log(response.url);
            let json = JSON.stringify(JSON.parse(body), null, 4);
            console.log(json);
        });
        response.on('error', function (e) {
            console.log('Error: ' + e.message);
        });
    };

    let get_guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    let Translate = function (content) {
        let request_params = {
            method: 'POST',
            hostname: host,
            path: path + params,
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'X-ClientTraceId': get_guid(),
            }
        };

        let req = https.request(request_params, response_handler);
        req.write(content);
        /*console.log(url.parse(req.url).pathname);*/
        //console.log(req);
        req.end();
    }
    let content = JSON.stringify([{ 'Text': text }]);
    res.send(content);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
