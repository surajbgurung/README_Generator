const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// // const questions = [{
//     message:"what is your user name?",
//     name:"username",
//     type:"input"
// },
//     {
//         message:"What is a badge name? ",
//         name: "badge",
//         type:"input"
//     }
//     // {
//     //     message:"What is the project title? ",
//     //     name: "project",
//     //     type:"input"
//     // },
//     // {
//     //     message:"What is the description? ",
//     //     name: "description",
//     //     type:"input"
//     // },
//     // {
//     //     message:"What are the table of contents? ",
//     //     name: "table",
//     //     type:"input"
//     // },
//     // {
//     //     message:"What is the installation? ",
//     //     name: "install",
//     //     type:"input"
//     // },
//     // {
//     //     message:"What is the usage? ",
//     //     name: "usage",
//     //     type:"input"
//     // },
//     // {
//     //     message:"What is the license number? ",
//     //     name: "license",
//     //     type:"input"
//     // },
//     // ,
//     // {
//     //     message:"Who is contributing? ",
//     //     name: "contribute",
//     //     type:"input"
//     // },
//     // {
//     //     message:"What are the required tests? ",
//     //     name: "test",
//     //     type:"input"
//     ];


inquirer
    .prompt({
            message:"what is your user name?",
           name:"username",
           type:"input"
        },
        
        
    )
    .then(function () {
        
        //const queryUrl = `https://api.github.com/search/users?q=${username}in%3Ausername`;
        const queryUrl = `  https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function (res) {
            console.log(res);
            const userName = res.data.login;
            const avatarUrl = res.data.avatar_url;
            const avatar = '![Avatar](' + avatarUrl + ')';
            //get email
            const email = res.data.email;
            //for heaeer
            let header = '#Good README Generator \n \n' +
                avatar + '\n \n' +
                'Your User Name : ' + userName + '\n \n' +
                'Your mail is: ' + email + '\n';
            let body = '##Good Readme Body \n';
            var document = header.concat('\n', body);
            fs.writeFile("README.md", document, function (err) {
                if (err) {
                    throw err;
                }
            })


        });
    });







// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
