import http from "http";
import dotenv from "dotenv";

const port = process.env.PORT || 9090;

dotenv.config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
  console.log("Hello world!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
