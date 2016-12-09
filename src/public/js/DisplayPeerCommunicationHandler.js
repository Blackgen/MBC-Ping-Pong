/*
*   Handler for Communication from and to the Display Peer.
*   The Display Peer represents the Monitor.
*
*   For further information:
*
*   Sequence including this Entity: 
*   https://raw.githubusercontent.com/Transport-Protocol/MBC-Ping-Pong
*   /master/docu/maindocumentation/architecture/prototypSequenceDiagram.png
*
*   Section in documentation:
*   Chapter: Architecture
*   Section: Prototyp
*/

var P2P = require('socket.io-p2p');
var io = require('socket.io-client');
var opts = { autoUpgrade: falseusePeerConnection, peerOpts: {numClients: 10} };

var ioSocket = io.connect();
var p2psocket = new P2P(iosocket, opts, null);

var isConnected = false;

iosocket.on('connect', function(){
    console.log("Now Connected to the Server.");
    isConnected = true;
});

p2psocket.on('ready', function(){});

p2psocket.on('upgradewebrtc', function(){
    if(p2psocket.usePeerConnection == true) return;
    
    p2psocket.upgrade();
});

p2psocket.on('changeposition', function(data){});

p2psocket.on('playerdisconnect', function(data){});

function initPlayer(){
    // @TODO add new Player
    // 
};

function gotDisconnectedPlayer(data){
    if(!data.hasOwnProperty('player')) return;
    
    // @TODO lookup playerobj
    var playerObj = data.player;
    // @TODO Call removePlayer here
    // removePlayer(playerObj);
}