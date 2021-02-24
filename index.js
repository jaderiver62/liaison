const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
var fix = require('fix-phone');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
var validator = require("email-validator");

const questions = [{
        type: 'input',
        name: 'headLine',
        message: 'Please enter a header - can be your team name or a heading of your choice! ',
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
        validate: idInput => {
            if (idInput) {
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
        validate: (number) => {
            return (number.length >= 10) && (isNumeric(number)) ? true : false;
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
            type: "list",
            name: "employeeType",
            message: "Would you like to add an Engineer or an Intern? ",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub username? ",
            when: ({employeeType})=> employeeType === "Engineer",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the Intern's school name? ",
            when: ({employeeType})=> employeeType === "Intern"
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the Employee\'s name (Required)?',
            validate: employeeName => {
                if (employeeName) {
                    return true;
                }
                console.log('Please enter a name! ');
                return false;
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the Employee\'s ID Number: (Required) ',
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                console.log('Please enter an ID number for the Employee!');
                return false;
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Enter this Employee\'s email (Required) ',
            validate: emailInput => {
                if (validator.validate(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter a valid e-mail!');
                    return false;
                }
            }
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


function isNumeric(string) {
    if (typeof string != "string") return false
    return !isNaN(string) &&
        !isNaN(parseFloat(string))
}

inititialize();


module.exports = { writeToFile, copyToFile };


// var result = '',
// end = number.substr(-7),
// end1 = end.substr(0, 3),

// end2 = end.substr(3),
// mid = number.substr(-10, 3),
// pre = '';
// if (length > 10) {
// pre = number.substr(0, (l - 10));
// }
// result += pre + ' (' + mid + ')-' + end1 + '-' + end2;

// }
// return result;