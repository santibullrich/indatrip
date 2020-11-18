const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '315c2ffee41b8a',
       pass: 'efb59521c4db6a'
    }
});

const sendMail = (email, name, checkin, checkout, ninos, adultos, cb) => {
const message = {
    from: email,
    to: "santibullrich@gmail.com",
    subject: "Testeandoooo",
    text: "Nombre: "+ name + " // Check-in: " + checkin +" // Check-Out: " + checkout +" // Niños: " + ninos + " // Adultos: "+ adultos
}

transporter.sendMail(message, function (err, data){
    if(err) {
        cb(err, null)
    } else {
        cb(null, data)
    }
});
}

module.exports = sendMail;

