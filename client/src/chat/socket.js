const io = require('socket.io-client');

export default function() {
    // const socket = io.connect('http://localhost:3001');
    const socket = io.connect();

    function join() {
        console.log('inside join');
        socket.emit('join', 'test');
    }

    return {
        join
    }
}