//
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("/Users/ak/gt-ft/sandbox/homework/Great-README-Generator/utils/generateMarkdown");

// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questionsArray = [
  { type: "input", message: "Title", name: "title" },
  { type: "input", message: "Description", name: "description" },
  {
    type: "checkbox",
    message: "Table of Contents",
    name: "tableOfContents",
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributors",
      "Tests",
      "Questions",
    ],
  },
  { type: "input", message: "Installation", name: "installation" },
  { type: "input", message: "Usage", name: "usage" },
  { type: "input", message: "License", name: "license" },
  { type: "input", message: "Contributors", name: "contributing" },
  { type: "input", message: "Tests", name: "tests" },
  { type: "input", message: "Questions", name: "questions" },
];

// function to write README file
function writeToFile(response) {
  fs.writeFile("README.md", generateMarkdown(response), function (err) {
    if (err) throw err;
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questionsArray)
    .then((response) => writeToFile(response))
    .catch((err) => console.log(err));
}

// function call to initialize program
init();

// inquirer.prompt(questionsArray).then(function (response) {
//   console.log(Response);
// });
