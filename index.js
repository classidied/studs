// creating a localhost to run + test the application
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/room.html');
});
//statis folder being set
app.use(experss.static(path.join(__dirname, 'public')));


// socket.io 
io.on('connection', (socket) => {
    // logging connections
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    // logging chat messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
});

const PORT=3000 || process.env.PORT;
server.listen(3000, () => {
  console.log('listening on *:3000');
});