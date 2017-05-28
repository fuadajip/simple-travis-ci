/*jshint esversion: 6 */

// You can delete line above to make error build in Travis CI

const express = require('express');
const app = express();
const port = process.env.PORT || 3020;
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Server Running On ' + port);
});