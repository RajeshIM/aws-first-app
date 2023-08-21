const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json({ message: 'This is GET Request'});
});

app.listen(3000, () => {
    console.log('server is listening on 3000');
});