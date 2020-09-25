//
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("/Users/ak/gt-ft/sandbox/homework/Great-README-Generator/utils/generateMarkdown");

// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questionsArray = [
  { type: "input", message: "What is your name?", name: "name" },
  { type: "input", message: "Where are you from?", name: "hometown" },
  { type: "input", message: "What is your favorite hobby?", name: "hobby" },
  { type: "input", message: "What is your favorite food?", name: "food" },
  { type: "input", message: "What is your GitHub username?", name: "github" },
  { type: "input", message: "What is your LinkedIn URL?", name: "linkedin" },
];

// function to write README file
function writeToFile(fileName, response) {
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
