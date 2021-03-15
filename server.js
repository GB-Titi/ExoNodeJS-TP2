//vidéos google explications -> HTTP203 (google developper)

//SUJET TP:
//Réaliser un chat en temps réel (sans persistances de données)
//Le chat fonctionne en localhost et utiliser deux onglets de navigation pour simuler deux utilisateur du chat
//lancer plein de requete pour vérifier que le code ne soit pas bloquant (synchrone)

//pour utiliser socket.io --> npm i --save socket.io

//recharger projet sur controle S --> "Forever" (ou process manager regarder sur google)

//j'ai suivi le cours et donc pas encore commencé le tp (j'étais pas là l'année dernière)

//utiliser path.join pour les import

// =========================== FIN "INTRO"  ===================================//

const express = require('express'); //export marche pas ici donc on utilise require pour utiliser express
const app = express(); //crée le serveur web avec express
const http = require('http').Server(app);
const fs = require('fs'); //on require file controller
const path = require('path');

//require de ServerEvent qu'on a crée en utilisant parh.join
const ServerEvent = require(path.join(__dirname, 'Controller', 'ServerEvent.js'));

//point d'écoute du canal 1: (toujours sur les listener d'abord déclarer sur quoi il écoute avant d'émettre, c'est pour ça qu'il est avant le require)
ServerEvent.on('Canal_1', data => console.log(data));

//require de WebSockt qu'on a crée en utilisant path.join pour récupérer message
const socketPath = path.join(__dirname, 'Controller', 'sockets.js');
require(socketPath).listen(http, ServerEvent);
//console.log('ServerEvent :', ServerEvent);

//Syncrone mais avant initialisation donc "ça passe" --> on dit que indexHtml est lu par chatFile
const chatFile = fs.readFileSync('./index.html');

function chatController(req, res){
    res.end(chatFile);//on appelle chatFile qui lie le fichier html et donc l'affiche sur la route qu'on donne au app.get
}

//req, res sont demandés par express donc on les met en paramètre
//on initialise la route de base (racine) avec "/" sur un get
app.get('/', (req, res) =>{
    res.end('Hello World !');
});

app.get('/discussion', chatController);

//methode qui permet de dire au serveur sur quel port écouter, on console log pour vérifier la connexion via un callback ('=>')
app.listen(3000, () => console.log('server is ready'));