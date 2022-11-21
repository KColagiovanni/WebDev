const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'kfctestingemail25@gmail.com',
		/* Had to set up 2-Step Verification and create an App Password */
		pass: 'ithyomlozpodznic'
	}
});

const mailOptions = {
	from:'kfctestingemail25@gmail.com',
	to: 'Boosteddeuce@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'Testing, Testing, Testing, 1, 2, 3',
	html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.verify(function(error, success) {
	if (error) {
	    console.log(error);
	} else {
        console.log('Server is ready to take our messages');
        transporter.sendMail(mailOptions, function(error, info){
			if(error){
				console.log(error);
			}else{
				console.log('Email sent: ' + info.response);
			}
		});
	}
});

