
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
	.prompt({
			message: "Enter your GitHub username:",
			name: "username",
			type:"input",
	})
	.then(function ({ username }) {
		const queryUrl = `https://api.github.com/users/${username}`;

		axios.get(queryUrl).then(function (res) {
			// console.log(res.data);

			// Get Username
			const username = res.data.login;

			// Get Avatar Image
			const avatarURL = res.data.avatar_url;
			const avatar = '![Avatar](' + avatarURL + ')';

			// Get Email
			const email = res.data.email;

			let document = 
			// Avatar
			' \n \n' +
			avatar + '\n \n' +
			// Usermame
			'User Name: ' + username + '\n \n' +
			// Email
			'Email: ' + email + '\n';

			fs.writeFile("README.md", document, function (err) {
				if (err) {
					throw err;
				}
			});
		})

		.then(function(){
			inquirer.prompt([
				{
					message:"What is your badge version? ",
					name: "badge",
					type:"input"
				},
				{
					message:"What is the project title? ",
					name: "project",
					type:"input"
				},
				{
					message:"What is your project description? ",
					name: "description",
					type:"input"
				},
				{
					message:"Table of contents are as follows(press enter)? ",
					name: "table",
					//type:"input"
				},
				{
					message:"installation? ",
					name: "install",
					type:"input"
                },
                {
					message:"usages ? ",
					name: "usage",
					type:"input"
				},
                
                {
					message:"credits ? ",
					name: "credit",
					type:"input"
				},
				 {
					message:" license ? ",
					name: "license",
					type:"input"
				},
				
				{
					message:"Who is contributing? ",
					name: "contribute",
					type:"input"
				},
				{
					message:"What are the required tests? ",
					name: "test",
					type:"input"
                },
                {
                    message:"what is the questions?",
                    name:"questions",
                    type:"input"
                }
			])
			.then(function(answers){
				console.log(answers);

				//let userQs = 
				// Prompt second set of questions
				//`## Second Set of Questions  \n \n`
	
				let body2 =

				// Badge
				`\n\n![bage image](https://img.shields.io/static/v1?label=Version&message=${answers.badge}&color=<COLOR>) \n`+

				// Project Title
				`## Project Title:\n\n # ${answers.project} \n \n`+

				// Project Description
                `## Description: \n\n ${answers.description} \n \n`+
                //table of content
                `## Table of contents\n \n`+//${answers.table}\n \n`+
                //installation
                `### Installation\n\n ${answers.install}\n \n\n`+
                //usage
                `### Usage\n \n ${answers.usage}\n \n`+
                //Credits
                `### Credits \n \n ${answers.credit}\n \n`+
                 //License
                `### License \n \n ${answers.license}\n \n`+
                //contributing
                `## Contributing \n \n ${answers.contribute}\n \n`+
                //tests
                `## Tests \n \n ${answers.test}\n \n`+
                //questions
                `## Questions \n \n ${answers.questions}`
                
				var document =  body2;
				fs.appendFile("README.md", document, function (err) {
					if (err) {
						throw err;
					}
				});
			})
		})
	})


