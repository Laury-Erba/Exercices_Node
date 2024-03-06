const http = require("http");
const fs = require("fs");
const server = http.createServer();

// req : information de la requete http parametre de la requete
// res : réponse du serveur suite au traitement de la requete
server.on("request", function (req, res) {
  const url = req.url.replace("/", "");
  if (url == "contact") {
    page = fs.createReadStream("View/contact.html");
  } else {
    page = fs.createReadStream("View/index.html");
  }
  page.pipe(res);
});

server.listen(3000, "localhost", () => {
  console.log("server running at http//localhost:3000/");
});
