const express = require("express");
const expressRouter = express.Router();
const path = require("path");

expressRouter.use("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "../serverHTML/GET/test.html"));
});

module.exports = expressRouter;
