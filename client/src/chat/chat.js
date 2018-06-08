import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

// import io from 'socket.io-client';
import socket from './socket';
// const socket = io.connect('http://localhost:3000');

class Chat extends Component {
    
    constructor(props, context) {
        super(props, context);

        console.log('inside constructor');

        this.state = {
            client: socket()
        }
    }

    handleClick() {
        console.log('handleClick');
        this.state.client.join();
        // socket.emit('join', 'test');
    }

    render() {
        return(
            <div>
                <h4>Chat</h4>
                <Button onClick={this.handleClick.bind(this)} variant="contained" color="primary">Hello</Button>
            </div>
        );
    }
}

export default Chat;