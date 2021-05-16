const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const myMiddleware = (req, res, next) => {
  console.log("Another log!!!!!!");
  next();
};

router.get("/", myMiddleware, (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../index.html"),
    { encoding: "utf8" },
    (err, data) => {
      if (err) return next(err);
      res.status(200).send(data);
    }
  );
});

module.exports = router;
