const express = require('express');
const app = express();
const port = process.env.PORT || 3020;
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Server Running On ' + port);
})