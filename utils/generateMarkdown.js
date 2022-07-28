// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "BSD 2-clause") {
    badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license === "BSD 3-clause") {
    badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === "GPLv2") {
    badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (license === "GPLv3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }  
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "Apache 2.0") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license === "BSD 2-clause") {
    licenseLink = "https://opensource.org/licenses/BSD-2-Clause"
  } else if (license === "BSD 3-clause") {
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
  } else if (license === "GPLv2") {
    licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  } else if (license === "GPLv3") {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/"
  } else {
    licenseLink = "https://choosealicense.com/licenses/unlicense/"
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  licenseSection = `license: ${license}`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ### ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

  ### Github URL: [${data.github}](https://github.com/${data.github}/)

  # Description
  ${data.description}

  # Table of Contents
  * [Installations](#installations)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  # Installations
  Run these commands for installations: ${data.installations}

  # Usage
  ${data.usage}

  # License
  Lincenses are listed as the following:
  ### ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  # Contributing
  ${data.contributing}

  # Test
  Run these commands for tests:
  ${data.test}

  # Questions
  For further questions, please email ${data.email}.
`;
}

module.exports = generateMarkdown;
