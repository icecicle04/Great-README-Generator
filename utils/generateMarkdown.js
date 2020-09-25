// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ## ${response.description}
  - ${response.tableOfContents[0]}
  - ${response.tableOfContents[1]}
  ## ${response.installation}
  ## ${response.usage}
  ## ${response.license}
  ## ${response.contributors}
  ## ${response.tests}
  ## ${response.questions}
`;
}

module.exports = generateMarkdown;
