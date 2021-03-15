'use strict';

//instancer et revoyer une instance unique d'EventEmitter
const EventEmitter = require('events').EventEmitter; //on recupère la class EventEmitter de "events"
const ServerEvent = new EventEmitter(); 

//pour exporter :
module.exports = ServerEvent;