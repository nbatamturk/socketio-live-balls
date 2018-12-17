/**
 * Created by Burak on 17.12.2018.
 */

const socketio = require('socket.io');
const io = socketio();

const socketApi = {};

socketApi.io = io;

io.on('connection',(socket)=>{
  console.log('a User Connected');
});

module.exports = socketApi;