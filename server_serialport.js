const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

app.use(function (req, res, next) {
    const origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
  
    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
      res.sendStatus(204);
    } else {
      console.log(origin);
      next();
    }
  });

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");
  io.emit("FromAPI",  'client connected > server');
 
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));



// Read the port data
const serialConnection = new SerialPort(process.argv[2], { baudRate: 9600 });
const parser = serialConnection.pipe(new Readline({ delimiter: '\n' }));


parser.on('data', data =>{
    console.log('got word from arduino:', data);
    // io.emit("FromAPI", data);
  }); 

//on data callback broadcast to the default socketio connection
serialConnection.on("open", function () {
    serialConnection.on('data', function (data) {
     io.emit("FromAPI", data[0]);
    });
});

//error handling
serialConnection.on("error", function () {
    console.error("Can't establish serial connection with " + process.argv[2]);
    process.exit(1);
});