const express = require("express");
const sendMail = require("./mail")
const app = express();
const path = require("path");

const PORT = 3000;



app.use(express.static(path.join(__dirname, './public')));

//Data parsing

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.post ("/email", function(req, res){
    console.log("Data: ", req.body);
    let name = req.body.name;
    let checkin = req.body.checkin;
    let checkout = req.body.checkout;
    let ninos = req.body.ninos;
    let adultos = req.body.adultos;
    let email = req.body.email
    sendMail(email, name, checkin, checkout, ninos, adultos, function (err, data){
        if(err) {
            res.status(500).send({message: "Internal Error"})
        } else {
            res.send ({message: "Tu email se ha enviado correctamente"})
        }
    })
    res.json({message: "Recibimos tu solicitud, te responderemos en breve."})
});

app.listen(PORT, function(){
    console.log("Server is running on PORT 3000")
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

