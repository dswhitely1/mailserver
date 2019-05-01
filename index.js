require('dotenv').config();

const express = require('express'),
	path = require('path'),
	nodeMailer = require('nodemailer'),
	bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('src'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
	const tranporter = nodeMailer.createTransport({
		host   : '', // your host
		port   : 465, // refer to your mail provider for the correct port, usually 465 for secure
		secure : true,
		auth   : {
			user : '', //Your Email authorizations
			pass : '', //Your Email password (RECOMMEND USING ENV and not exposing your log in details)
		},
	});

	const mailOptions = {
		from    : '', // From Email
		to      : '', //Your email
		subject : '', //You can set this what you want
		text    : '', //Body of your message
	};
});

res.end();

const server = app.listen(port, () => {
	console.log(`\n\n*** Server started on port ${port}***\n`);
});
