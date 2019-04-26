const Tesseract = require('tesseract.js');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const fs = require('fs');
app.use(fileUpload());


const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Please specify an image.'));

app.post('/:image', (req, res)=> {
    var imageBuffer = req.files["data"]["data"];
    Tesseract.recognize(imageBuffer).then(function(result){
        console.log(result.text);
        res.send(result.text);
    });
});


app.listen(port, () => console.log(`OCR Server listening on port ${port}!`));