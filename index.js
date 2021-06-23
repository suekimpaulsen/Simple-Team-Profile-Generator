const inquirer = require('inquirer');
const emailValidator = require("email-validator");

const fs = require('fs');
const generateSite = require('./src/generate-site');


// add more & list choices for employee
const addQuestions = [
    {
        type: "confirm",
        name: "confirmAdd",
        message: "Would you like to add an employee?",
        default: true
    },
    {
        type: "checkbox",
        name: "employeeOption",
        message: "Which type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
        when: ({ confirmAdd }) => confirmAdd,
        validate: employeeOptionInput => {
            if (employeeOptionInput.length = 1) {
                return true;
            } else {
                console.log('Please select ONE');
                return false;
            }
        }
    }
]

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
            if (emailValidator.validate(emailInput)) {
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
            if (emailValidator.validate(emailInput)) {
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
            if (emailValidator.validate(emailInput)) {
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



// need to add:
// - writefile 


//init function
function init() {
    inquirer
    .prompt()
    .then()
}

// function call to initalize app
init();