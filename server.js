const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/api/title', (req, res) => {
    res.json({
        "title": "title1",
        "test": "test"
    });
});

app.listen(app.get("port"), () => {
    console.log(`Server at: http://localhost:${app.get("port")}/`);
});