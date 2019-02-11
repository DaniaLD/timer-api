const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        greetings: 'long time no see!!'
    });
});

app.listen(port, err => {
    if (err) {
        console.log(`Couldn't connect to server. ERROR => ${err}`);
    } else {
        console.log(`Connected to server successfully. PORT => localhost:${port}`);
    }
});