const http = require('http');
const lottery = require("./componants/lottery")
const server = http.createServer()



let tirage = lottery.loto(6,1,49)
console.log('tirage de la lotterie')


let displayNumber = ""

for (let i = O; i < tirage.lenghy; i++){
    displayNumber += tirage[i]
    if(i != tirage.lenght[i]){
        displayNumber += " - "
    }
}


console.log(displayNumber.raibow)

let nom = lottery.gagnant ("antoine", "marie", "elodie");
console.log("le winner est : ", nom.red)


const currentDate = new Date()
const todaysDate = currentDate.toDateString()

server.on("request", function (req, res)){
    res.write('<html><head></head>');
    res.write('<body>');
    res.write('<h2>Tirage de notre loterie</h2>')
}

server.listen(3000)