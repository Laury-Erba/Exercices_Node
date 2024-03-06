const http = require("http");
const fs = require("fs");
const { shuffleArray } = require("./src/utils.js");

const hostname = "127.0.0.1";
const port = 3000; // Change le port à 3000 ou tout autre numéro de port valide
const users = ["alan", "sophie", "Bernard", "Elie"];

const server = http.createServer((req, res) => {
  const url = req.url.replace("/", "");
  if (url === "/") {
    fs.readFile("views/index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Internal server ERROR");
        return;
      }

      const templateWithData = data.replace("${users}", users.join(","));
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.end(templateWithData);
    });
  } else if (url === "/shuffle") {
    const shuffledUsers = shuffleArray(users);
    fs.readFile("./views/shuffle.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Internal server ERROR");
        return;
      }

      const templateWithData = data.replace(
        "${shuffledUsers}",
        shuffledUsers.join(",")
      );
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.end(templateWithData);
    });
  }
});

server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
