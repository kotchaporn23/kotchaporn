const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('C:/618499/Resume')));

app.get('/', function (reg, res) {
    res.sendFile(path.jion('C:/618499/Resume/index.html'));
});

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});