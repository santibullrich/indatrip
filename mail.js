const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport")



const auth = {
    auth: {
        api_key: "322927838ae3e26e4e72e656304b55a6-2af183ba-907b3ef7",
        domain: "sandbox196a0bf3cc694586b4307df490347260.mailgun.org"
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, name, checkin, checkout, ninos, adultos, cb) => {
const mailOptions = {
    from: email,
    to: "santibullrich@gmail.com",
    subject: "Testing",
    text: "Nombre: "+ name + " // Check-in: " + checkin +" // Check-Out: " + checkout +" // Niños: " + ninos + " // Adultos: "+ adultos
}

transporter.sendMail(mailOptions, function (err, data){
    if(err) {
        cb(err, null)
    } else {
        cb(null, data)
    }
});
}

module.exports = sendMail;

