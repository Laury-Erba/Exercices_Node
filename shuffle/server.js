// Exercices/server.js
const http = require("http");
const fs = require("fs");
const path = require("path");
const { shuffleArray } = require("./src/utils.js");

const users = ["alan", "sophie", "Bernard", "Elie"];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //  Afficher la liste des utilisateurs
    const userList = users.join(", ");
    renderView(res, "users", { userList });
  } else if (req.url === "/shuffle") {
    //  Mélanger les utilisateurs
    const shuffledUsers = shuffleArray(users);
    renderView(res, "shuffle", { shuffledUsers });
  } else {
    // Gérer les autres routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

function renderView(res, viewName, data) {
  const filePath = path.join(__dirname, "views", `${viewName}.html`);
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      Object.keys(data).forEach((key) => {
        const pattern = new RegExp(`{{\\s*${key}\\s*}}`, "g");
        content = content.replace(pattern, data[key]);
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
}

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
