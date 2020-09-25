// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ![<ALT>](https://img.shields.io/badge/${response.label}-${response.message}-${response.color})
  ## Description 
  ${response.description}
  ## Table of Contents
   - ${response.tableOfContents[0]}
   - ${response.tableOfContents[1]}
   - ${response.tableOfContents[2]}
   - ${response.tableOfContents[3]}
   - ${response.tableOfContents[4]}
   - ${response.tableOfContents[5]}
  ## Installation
  ${response.installation}
  ## Usage
  ${response.usage}
  ## Licenses
  ${response.license}
  ## Contributors
  ${response.contributors}
  ## Tests
  ${response.tests}
  ## Questions
  ${response.questions}
`;
}

module.exports = generateMarkdown;
