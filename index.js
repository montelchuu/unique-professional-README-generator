// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project."
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your Github username."
    },
    {
        type: "input",
        name: "summary",
        message: "Please enter a summary for your project."
    },
    {
        type: "input",
        name: "layout",
        message: "Please enter the project layout for your project."
    },
    {
        type: "list",
        name: "language",
        message: "Please pick the languages used.",
        choices: ["HTML", "CSS", "JavaScript", "Node.js", "React" ,"MySQL", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Please input dependencies used.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage of this project.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide the contributors to the project.",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
