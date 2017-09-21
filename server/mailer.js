var nodemailer = require('nodemailer');
//https://myaccount.google.com/lesssecureapps?pli=1
//Allow less secure apps: ON (true)
//email: healthykitchen.zt@gmail.com
//pass: test

var mailOptions = {
	from: 'healthykitchen.zt@gmail.com',
	to: 'healthykitchen.zt@gmail.com',
	subject: 'New Order!',
	text: 'That was easy!'
};

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'healthykitchen.zt@gmail.com',
		pass: 'test'
	}
});

var mailer = function(req, res) {
	if (req.body) {
		mailOptions.text = JSON.stringify(req.body);

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});	
	}
}

module.exports = mailer;