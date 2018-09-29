'use strict';
const express = require('express');
const app = express();
var fs = require('fs');
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const axios = require('axios');
const { Translate } = require('@google-cloud/translate');
const projectId = 'smartkey-217906';
const translate = new Translate({
    projectId: projectId,
});
const target = 'hi';

const d = "";

/*app.post('/hello', (req, res) => {
    d = req.body;
    console.log(d);
})*/

app.get('/api', (req, res) => {
    res.send('hey react');
    res.end();
})

const text = 'Hello, world!';

translate
    .translate(text, target)
    .then(results => {
        const translation = results[0];

        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });

translate
    .detect(text)
    .then(results => {
        let detections = results[0];
        detections = Array.isArray(detections) ? detections : [detections];

        console.log('Detections:');
        detections.forEach(detection => {
            console.log(`${detection.input} => ${detection.language}`);
        });
    })
    .catch(err => {
        console.error('ERROR:', err);
    });