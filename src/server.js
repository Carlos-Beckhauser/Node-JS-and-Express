const express = require("express");

const app = express();
const port = 3000;

const users = [
  { user: "Carlos", email: "cbeckhauser@gmail.com" },
  { user: "Cartola", email: "cbeckhauser@gmail.com" },
  { user: "Carlota", email: "cbeckhauser@gmail.com" },
  { user: "Carlinhos", email: "cbeckhauser@gmail.com" },
];

const middlewareName = (req, res, next) => {
  console.log("Antes de exibir a página");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.end("<h1>HELLO WORLD</h1>");
});

app.use(middlewareName);

app.post("/", (req, res) => {
  res.send("MEU PRIMEIRO POST");
});

app.get("/number", (req, res) => {
  res.end(JSON.stringify(users));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
