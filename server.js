const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
   cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
   },
});

const rooms = new Map();

app.get("/rooms", (req, res) => {
   res.json(rooms);
   console.log("Hello");
});

app.post("/rooms", (req, res) => {
   console.log(req.body);
});

io.on("connection", (socket) => {
   console.log("Server connected", socket.id);
});

server.listen(9999, (err) => {
   if (err) {
      throw Error(err);
   }

   console.log("Server started");
});
