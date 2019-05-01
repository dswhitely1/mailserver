# Simple Mail Backend

Fork this project and clone it to your computer.

Once you have the files in your computer, change into the directory and run:

```sh
$ yarn install
```
This will install the dependencies that the server needs to run.

After the dependencies are installed, lets go ahead and install nodemon.  Nodemon is a package that will run the server locally and will restart when you make changes to your files inside of your server.

```sh
$ yarn add nodemon --dev
```

This will install nodemon as a development dependency only.  It will not be included when you move your project to your hosting provider.

Let's now edit the package.json file and add the following:

```sh
"scripts": {
		"server": "nodemon index.js"
	},
```
To test out our server, we will run the command ```yarn server```, and you should see in your console ```*** Server started on port 5000***```.  

We can check to see if our server is running by going to your browser and typing ```http://localhost:5000/```.  If you get the message ```Cannot GET```, our server is up and running.

I would recommend checking out the documentation on https://nodemailer.com/about/ for setting up the configuration of the mail server.  

Also highly recommended to use a .env file to store your variables in your file and not expose them to the public.  

If you have any questions, feel free to reach out to me on Slack or at dswhitely1@gmail.com

