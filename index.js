const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
var phoneNumberValidator = require('fix-phone');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
var validator = require("email-validator");

const questions = [{
        type: 'input',
        name: 'headLine',
        message: 'Pleases enter a header - can be your team name or a heading of your choice! ',
        validate: teamInput => {
            if (teamInput) {
                return true;
            }
            console.log('Please enter a name! ');
            return false;
        }
    },
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the Manager\'s name (Required)?',
        validate: managerName => {
            if (managerName) {
                return true;
            }
            console.log('Please enter a manager! ');
            return false;
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter the Manager\'s ID Number: (Required) ',
        validate: linkInput => {
            if (linkInput) {
                return true;
            }
            console.log('Please enter an ID number for the Manager!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter this Manager\'s email (Required) ',
        validate: emailInput => {
            if (validator.validate(emailInput)) {
                return true;
            } else {
                console.log('Please enter a valid e-mail!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: 'Please enter an office phone number for the Manager: ',
        validate: (input) => {
            return phoneNumberValidator(input) ? true : false;
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter an email for the Manager: ',
        validate: emailInput => {
            if (validator.validate(emailInput)) {

                return true;
            } else {
                console.log('Please enter a valid contact e-mail!');
                return false;
            }
        }
    }, 
    {
        type: 'loop',
        name: 'addEmployee',
        message: 'Add an Employee? ',
        questions: [{
            type: "checkbox",
            name: "employeeType",
            message: "Enter the employee type: ",
            choices: ['Engineer', 'Intern']
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is your GitHub username? ",
            when:  function(answers) {
                return answers.employeeType === 'Engineer';
            },           
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your school? ",
            when:  function(answers) {
                return answers.employeeType === 'Intern';
            }, 
        },
       ]
    },
];



function inititialize() {
    inquirer.prompt(questions).then((answers) => {
        const newIndex = generatePage(answers);
        return writeToFile('./index.html', newIndex).then(writeFileResponse => {
                console.log(writeFileResponse);
            })
            .catch(err => {
                console.log(err);

            });
    });
}
// writing files

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File generated.'
            });
        });
    });
}

const copyToFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet generated.'
            });
        });
    });
};



inititialize();


module.exports = { writeToFile, copyToFile };