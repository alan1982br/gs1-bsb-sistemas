const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  res.send({ response: "Start server serial_port ok" }).status(200);
});

module.exports = router;