const express = require("express");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const hello = require("./routes/routes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const server = http.createServer(app);

app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
  console.log("hello world!");
  next();
});

app.use("/hello", hello);
app.use("/api/v1/", apiRoutes);

app.use((err, req, res, next) => {
  console.log("Error!!: ", err.message);
  res.status(500).json({ error: err.message });
});

server.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on port ${process.env.PORT ? process.env.PORT : 3000}`)
);
