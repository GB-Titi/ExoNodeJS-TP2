'use strict';

const socketio = require('socket.io');
const client = require('socket.io-client');

//const ServerEvent = require(path.join(__dirname, 'ServerEvent.js'));

//on appelle emir de serverEvent pour emettre un message --> on emet le message mais personne écoute
//ServerEvent.emit('Canal_1', 'Salut à tous c\'est david la farge pokemon' );

//import module
module.exports.listen = (http, ServerEvent) =>{
    const io = socketio(http, {
        cors: {
            origin: "http://localhost:3000",
        },
    });

    //message recu des qu'on se connecte aux sockets du serveur
    io.on('connection', socket => {
        socket.on('message le s', data => console.log(data));
    });
};