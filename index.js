// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project.",
        validate: titleinput => {
            if (titleinput) {
                return true;
            } else {
                console.log("Please enter the name of your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your Github username.",
        validate: githubinput => {
            if (githubinput) {
                return true;
            } else {
                console.log("Please enter your Github username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project.",
        validate: descriptioninput => {
            if (descriptioninput) {
                return true;
            } else {
                console.log("Please enter a description for your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "dependencies",
        message: "Please input dependencies used.",
    },
    {
        type: "input",
        name: "installations",
        message: "Please enter the instructions for installation for your project.",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage of this project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please pick the license used.",
        choices: ["Apache 2.0", "BSD 2-clause", "BSD 3-clause", "GPLv2", "GPLv3" ,"MIT", "Unlicensed"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide the contributors to the project.",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter the command to run tests.",
        default: "npm test"
    },
    {
        type: "checkbox",
        name: "language",
        message: "Please pick the languages used.",
        choices: ["HTML", "CSS", "JavaScript", "Node.js", "React" ,"MySQL", "Other"]
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
        validate: emailinput => {
            if (emailinput) {
                return true;
            } else {
                console.log("Please enter your email.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("success!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
