const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
  // res.send({ response: "Start server serial_port ok" }).status(200);
  res.sendFile(path.join(__dirname + '/build/index.html'));
});
module.exports = router;