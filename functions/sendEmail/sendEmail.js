const nodemailer = require("nodemailer");
require("dotenv").config();

exports.handler = function (event, context, callback) {
  //console.log(event);
  let { name, email, message } = JSON.parse(event.body);

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.REACT_APP_NODEMAILER_MAIL, // google user
      pass: process.env.REACT_APP_NODEMAILER_PASSWORD, // google password generated in account security/2stepVerification
    },
  });

  // send mail with defined transport object
  transporter.sendMail(
    {
      from: `"consulta portfolio 👻" <${process.env.REACT_APP_NODEMAILER_MAIL}>`, // sender address
      to: process.env.REACT_APP_NODEMAILER_SEND_MAIL, // list of receivers
      subject: `consulta de ${name}`, // Subject line
      html: `<h2>Name</h2></br>
      <p>${name}</p></br>
      <h2>Email</h2></br>
      <p>${email}</p></br>
      <h2>Message</h2></br>
      <p>${message}</p></br>`, // html body
    },
    function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: "success",
          }),
        });
      }
    }
  );

};
