const inquirer = require('inquirer');
const fs = require('fs');
const generateSite = require('./src/generate-site');

//manager question array
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the name of the manager")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the manager's ID")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the manager's email address")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter the manager's office number")
                return false;
            }
        }
    }
]

//engineer question arry
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the name of the engineer")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the engineer's ID")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the engineer's email address")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter the engineer's github username")
                return false;
            }
        }
    }
]

//intern question array
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the name of the intern")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the intern's ID")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the intern's email address")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter the intern's school name")
                return false;
            }
        }
    }
]

//init function
function init() {
    inquirer
    .prompt()
    .then()
}

// function call to initalize app
init();