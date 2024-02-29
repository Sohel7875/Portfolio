const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require("body-parser");

require('dotenv').config()

let app = express()


const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(process.env.PORT)
port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});


const sendMail = async (email, name, message, number) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure the email service or SMTP details here
    service: "gmail",
    auth: {
      user: "elcidtang@gmail.com",
      pass: "pxsaxwvrpbazmjlq"
    },
  });

  // Compose the email message
  const mailOptions = {
    from: email,
    to: 'sssohel786@gmail.com',
    subject: `Contact Through Portfolio ${name}`,
    text: 
    `email: ${email},
    number: ${number}
      message: ${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

app.post('/sencontact', async (req, res) => {
  try {
    let { name, email, number, message } = req.body
    await sendMail(email, name, message, number);
    res.status(200).json({
      message:
        "Successfully Contacted",
    });

  } catch (error) {

    console.log("Error during Email Transporation:", error); // Debugging statement
    res.status(500).json({ message: "Email Sending failed" });
  }

})