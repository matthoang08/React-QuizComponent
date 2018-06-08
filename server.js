const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const chat = require('./server/chat/chat');

io.on('connection', function(client) {

    console.log('connection');

    client.on('join', chat.handleJoin);

    client.on('error', function(err){
        console.log('received error from client: ', client.id);
        console.log(err);
    });
});

app.set('port', process.env.PORT || 3001);

app.get('/api/title', (req, res) => {

    console.log('api hit');

    res.json({
        "title": "title1",
        "test": "test"
    });
});

server.listen(app.get("port"), () => {
    console.log(`Server at: http://localhost:${app.get("port")}/`);
});