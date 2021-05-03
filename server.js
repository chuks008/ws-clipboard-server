require('dotenv').config();
const WSS = require('ws').Server;

const PORT_NUMBER = process.env.AIRCLIP_PORT;

const wss = new WSS({
    port: PORT_NUMBER
});

wss.on('connection', (socket) => {
    console.log("Opened connection...");

    const jsonResponse = JSON.stringify({message: 'Got your messasge'});
    socket.send(jsonResponse);

    socket.on('message', (message) => {
        console.log("Message Received: ", message);
    });

    socket.on('close', () => {
        console.log('Closed Connection');
    });
});

wss.on('listening', () => {
    console.log("Listening on port: ", PORT_NUMBER);
});