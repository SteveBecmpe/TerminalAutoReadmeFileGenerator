let licenseArr = [//array of licenses
  {
      license: 'Apache 2.0 License',
      badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      URL: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
      license: 'BSD 3-Clause License',
      badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      URL: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  {
      license: 'BSD 2-Clause License',
      badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
      URL: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  {
      license: 'Creative Commons, Attribution 4.0 International',
      badge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)',
      URL: 'https://creativecommons.org/licenses/by/4.0/'
  },
  {
      license: 'Creative Commons, Attribution-ShareAlike 4.0 International',
      badge: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)',
      URL: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  {
      license: 'Creative Commons, Attribution-NonCommercial 4.0 International',
      badge: '[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)',
      URL: 'https://creativecommons.org/licenses/by-nc/4.0/'
  },
  {
      license: 'Creative Commons, Attribution-NoDerivates 4.0 International',
      badge: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nd/4.0/)',
      URL: 'https://creativecommons.org/licenses/by-nd/4.0/'
  },
  {
      license: 'Creative Commons, Attribution-NonCommmercial-ShareAlike 4.0 International',
      badge: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)',
      URL: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
  },
  {
      license: 'Creative Commons, Attribution-NonCommercial-NoDerivatives 4.0 International',
      badge: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)',
      URL: ''
  },
  {
      license: 'Eclipse Public License 1.0',
      badge: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
      URL: 'https://creativecommons.org/licenses/by-nc-nd/4.0/'
  },
  {
      license: 'GNU GPL v3',
      badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)',
      URL: 'https://opensource.org/licenses/EPL-1.0'
  },
  {
      license: 'GNU GPL v2',
      badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)',
      URL: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  },
  {
      license: 'GNU AGPL v3',
      badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)',
      URL: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  {
      license: 'GNU LGPL v3',
      badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)',
      URL: 'https://www.gnu.org/licenses/lgpl-3.0'
  },
  {
      license: 'GNU FDL v1.3',
      badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)',
      URL: 'https://www.gnu.org/licenses/fdl-1.3'
  },
  {
      license: 'IBM Public License Version 1.0',
      badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
      URL: 'https://opensource.org/licenses/IPL-1.0'
  },
  {
      license: 'The MIT License',
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      URL: 'https://opensource.org/licenses/MIT'
  },
  {
      license: 'Mozilla Public License 2.0',
      badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      URL: 'https://opensource.org/licenses/MPL-2.0'
  },
  {
      license: 'Open Data Commons, Attribution License (BY)',
      badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
      URL: 'https://opendatacommons.org/licenses/by/'
  },
  {
      license: 'Open Data Commons, Open Database License (ODbL)',
      badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
      URL: 'https://opendatacommons.org/licenses/odbl/'
  },
  {
      license: 'Open Data Commons, Public Domain Dedication and License (PDDL)',
      badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
      URL: 'https://opendatacommons.org/licenses/pddl/'
  },
  {
      license: 'Perl, The Perl License',
      badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
      URL: 'https://opensource.org/licenses/Artistic-2.0'
  },
  {
      license: 'Perl, The Artistic License 2.0',
      badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
      URL: 'https://opensource.org/licenses/Artistic-2.0'
  },
  {
      license: 'SIL Open Font License 1.1',
      badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
      URL: 'https://opensource.org/licenses/OFL-1.1'
  },
  {
      license: 'The Unlicense',
      badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
      URL: 'https://unlicense.org/'
  },
  {
      license: 'WTFPL',
      badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
      URL: 'http://www.wtfpl.net/about/'
  },
  {
      license: 'The zlib/libpng License',
      badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
      URL: ''
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      for(let i=0; i<licenseArr.length;i++){
        if(license===licenseArr[i].license){
          return licenseArr[i];
        };
    } ; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}//didn't need this per class instruction

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}// didn't need this per class instruction

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let LicenseBadgeNurl = renderLicenseBadge(data.projectLicense)
  return `# ${data.projectTitle}
 
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)   

  ### Table of Contents:
  -[Description](#Description)      
  -[Installation Instructions](#Installation)    
  -[Usage Information](#Usage)    
  -[Contribution guidelines](#Contributing)    
  -[Test Instructions](#Tests)
  
  ## Description    
  ${data.projectDescription}   
    
  
  ## Installation    
  ${data.projectInstall}   
    
  
  ## Usage    
  ${data.projectUsage}   
  
  
  ## License   
  ${data.projectLicense}    
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)   
  Hold "Ctrl" and Click the license badge and it will take you to the website.     
  
  
  ## Contributing 
  ${data.projectContribution}   
    
  
  ## Tests       
  ${data.projectTest}    
  
  
  ## Questions: 
  GitHub: https://github.com/${data.projectGHusername}     
  For issues that are not covered covered here or at the GiHub repo or for more information contact me at the email address below:   
  ${data.projectEmail}        
    
`;
}

module.exports = generateMarkdown;
