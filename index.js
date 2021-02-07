// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const until = require('util');
const generateMarkdown = require('./generateMarkdown');
const writeFileAsynic = util.promisify(fs.writeFile);
let file = 'user_README.md';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("fileName " + fileName);
    console.log("Collected Data " + data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("TempReadme", data);
        });
}

// Function call to initialize app
init();
