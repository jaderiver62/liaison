const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
var validator = require("email-validator");
var employeeArray = [];
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
    }, {
        type: 'confirm',
        name: 'createEmployees',
        message: 'Do you want to add employees?'

    }


];

var employeeTypePrompt = {
    type: 'list',
    name: 'addEmplyee',
    message: 'Would you like to add an employee?',
    choices: ['yes', 'no'],
};

function getEmployees() {
    inquirer.prompt(employeeTypePrompt).then((answers) => {
        var isAdding = answers.addEmplyee;
        if ((isAdding) === 'yes') {
            console.log(answers);
            getEmployees();
        } else { console.log("Meowsss"); }

    })

}

function inititialize() {
    inquirer.prompt(questions).then(getEmployees(answers)).then((answers) => {
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
// copying file
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

function phoneNumberValidator(number) {
    if (isNumeric(number)) {
        var length = number.length;
        if (length < 10) console.log('Phone number length should to be 10 digits');

        var result = '',
            end = number.substr(-7),
            end1 = end.substr(0, 3),

            end2 = end.substr(3),
            mid = number.substr(-10, 3),
            pre = '';
        if (length > 10) {
            pre = number.substr(0, (l - 10));
        }
        result += pre + ' (' + mid + ')-' + end1 + '-' + end2;

    }
    return result;
}

function isNumeric(string) {
    if (typeof string != "string") return false
    return !isNaN(string) &&
        !isNaN(parseFloat(string))
}

inititialize();
//.then()

module.exports = { writeToFile, copyToFile };