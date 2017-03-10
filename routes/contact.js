let express = require('express');
let nodemailer = require('nodemailer');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contact', {
        title: 'Contact'
    });
});

router.post('/send', function (req, res, next) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'expresswebsite@gmail.com',
            pass: 'expresswebsite'
        }
    });

    let mailOptions = {
        from: 'Alejandro <doe@pp.com>',
        to: 'alejandro6230@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new submission: ' + req.body.name + ' ,' +
        req.body.email + ' ,' + req.body.message,
        html: '<p>You have a new submission</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });

});

module.exports = router;
