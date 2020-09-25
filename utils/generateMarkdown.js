// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ![<ALT>](https://img.shields.io/badge/${response.label}-${response.message}-${response.color})
  ## ${response.description}
    - ${response.tableOfContents}
  }
  ## ${response.installation}
  ## ${response.usage}
  ## ${response.license}
  ## ${response.contributors}
  ## ${response.tests}
  ## ${response.questions}
`;
}

module.exports = generateMarkdown;
