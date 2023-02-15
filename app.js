const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Meu primeiro projeto NODE JS");
  }

  if (req.url === "/test") {
    res.end("<h1>HELLO WORLD</h1>");
  }

  if (req.url === "/number") {
    res.end(JSON.stringify({ user: "Carlos", email: "cbeckhauser@gmail.com" }));
  }

  /* res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World"); */
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
