// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const until = require('util');
const generateMarkdown = require('./generateMarkdown');
// const writeFileAsynic = util.promisify(fs.writeFile);
let file = 'user_README.md';

let licenseArr = [//array of licenses
    {
        license: 'Apache 2.0 License',
        badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        license: 'BSD 3-Clause License',
        badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    },
    {
        license: 'BSD 2-Clause License',
        badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    },
    {
        license: 'Creative Commons, Attribution 4.0 International',
        badge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)'
    },
    {
        license: 'Creative Commons, Attribution-ShareAlike 4.0 International',
        badge: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)'
    },
    {
        license: 'Creative Commons, Attribution-NonCommercial 4.0 International',
        badge: '[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)'
    },
    {
        license: 'Creative Commons, Attribution-NoDerivates 4.0 International',
        badge: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nd/4.0/)'
    },
    {
        license: 'Creative Commons, Attribution-NonCommmercial-ShareAlike 4.0 International',
        badge: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)'
    },
    {
        license: 'Creative Commons, Attribution-NonCommercial-NoDerivatives 4.0 International',
        badge: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)'
    },
    {
        license: 'Eclipse Public License 1.0',
        badge: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    },
    {
        license: 'GNU GPL v3',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        license: 'GNU GPL v2',
        badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'
    },
    {
        license: 'GNU AGPL v3',
        badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)'
    },
    {
        license: 'GNU LGPL v3',
        badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)'
    },
    {
        license: 'GNU FDL v1.3',
        badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)'
    },
    {
        license: 'IBM Public License Version 1.0',
        badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    },
    {
        license: 'The MIT License',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        license: 'Mozilla Public License 2.0',
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    },
    {
        license: 'The zlib/libpng License',
        badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
    }
];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the Project Title?',
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
           'IBM Public License Version 1.0', 'The MIT License', 'Mozilla Public License 2.0', 'The zlib/libpng License']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('fileName ' + fileName);
    console.log('Collected Data ' + data.projectLicense);
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
