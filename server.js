//SUJET TP:
//Réaliser un chat en temps réel (sans persistances de données)
//Le chat fonctionne en localhost et utiliser deux onglets de navigation pour simuler deux utilisateur du chat
//lancer plein de requete pour vérifier que le code ne soit pas bloquant (synchrone)

//pour utiliser socket.io --> npm i --save socket.io

const express = require('express'); //export marche pas ici donc on utilise require pour utiliser express

const app = express(); //crée le serveur web avec express

//req, res sont demandés par express donc on les met en paramètre
//on initialise la route de base (racine) avec "/" sur un get
app.get('/', (req, res) =>{
    res.end('Hello World !');
});

//methode qui permet de dire au serveur sur quel port écouter, on console log pour vérifier la connexion via un callback ('=>')
app.listen(3000, () => console.log('server is ready'));