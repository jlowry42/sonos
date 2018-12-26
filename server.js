const {DeviceDiscovery} = require('sonos');
//const http = require('http');
const express = require('express');
const cors = require('cors');

/*
 *const hostname = '127.0.0.1';
 *const port = 3000;
 */

/*
 *const server = http.createServer((req, res) => {
 *  // creates the server
 *  res.statuscode = 200;
 *  res.setHeader('Content-Type', 'text/plain');
 *  res.end('Hello from the server');
 *});
 *
 *server.listen(port, hostname, () => {
 *  console.log(`server running at http://${hostname}:${port}/`);
 *});
 */

const server = express();
server.use(cors());
//server.use(function(req, res, next) {
//res.header('Access-Control-Allow-Origin', '*');
//res.header(
//'Access-Control-Allow-Headers',
//'Origin, X-Requested-With, Content-Type, Accept',
//);
//next();
//});

// handle requests to root of api: /
server.get('/', (req, res) => {
  res.send('Hello from express!');
});

// GET hosts/players: returns a list of sonos players
server.get('/players', (req, res) => {
  DeviceDiscovery(dev => {
    res.status(200).json(dev);
    console.log(dev);
  });
});

// GET player/:id/tracklist: returns the tracklist of the specific sonos
// GET player/:id/currentTrack: returns the current track of the sonos

// watch for connections
server.listen(5000, () => {
  console.log('server running on localhost:5000');
});
