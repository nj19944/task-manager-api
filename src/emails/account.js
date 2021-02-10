const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.sendgrid_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nj19944@gmail.com',
        subject: 'Thanks for joining in!!',
        text: `Welcome to the App ${name}. Let me know how you go along the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nj19944@gmail.com',
        subject: 'Sorry to see you go!!',
        text: `Good Bye ${name}. I hope to see you back soon .`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}