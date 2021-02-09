// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const until = require('util');
const generateMarkdown = require('./generateMarkdown.js');
// const writeFileAsynic = util.promisify(fs.writeFile);
let file = 'user_README.md';



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the Project Title, use - instead of spaces?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter Project Description?',
    },
    {
        type: 'input',
        name: 'projectInstall',
        message: 'Enter Project Installation Instructions?',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Enter Usage Information?',
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'Enter contribution guidelines?',
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'Enter test instructions?',
    },
    {
        type: 'input',
        name: 'projectGHusername',
        message: 'Enter GitHub Username?',
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'Enter email address for user contact?',
    },
    {
        type: 'list',
        message: 'Choose a license?',
        name: 'projectLicense',
        choices: ['Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Creative Commons, Attribution 4.0 International', 'Creative Commons, Attribution-ShareAlike 4.0 International',
            'Creative Commons, Attribution-NonCommercial 4.0 International', 'Creative Commons, Attribution-NoDerivates 4.0 International', 'Creative Commons, Attribution-NonCommmercial-ShareAlike 4.0 International',
            'Creative Commons, Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3',
            'IBM Public License Version 1.0', 'The MIT License', 'Open Data Commons, Attribution License (BY)', 'Mozilla Public License 2.0', 'Open Data Commons, Open Database License (ODbL)',
            'Open Data Commons, Public Domain Dedication and License (PDDL)', 'Perl, The Perl License', 'Perl, The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'WTFPL', 'The zlib/libpng License']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName+'-readme.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Readme File Named '+ '"'+ fileName+'-readme.md"' + ' Generated!') );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data.projectTitle, data);
        });
}

// Function call to initialize app
init();
