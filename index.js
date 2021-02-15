const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
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
        message: 'Enter this project\'s site name (Required) ',
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
        validate: input => {
            return phoneNumberValidator(input);
        }
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Would you like to include a Table of Contents? ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation information you wish to include: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project: ',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']

    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What languages did you write this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for this project\s use: ',

    },
    {
        type: 'input',
        name: 'imageUrl',
        message: 'Add an image/screenshot URL to help with usage: '
    },
    {
        type: 'input',
        name: 'contactName',
        message: 'Please enter a contact name for questions users have about your project: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a contact name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter a valid email for the contact name: ',
        validate: emailInput => {
            if (validator.validate(emailInput)) {
                return true;
            } else {
                console.log('You need to enter a valid contact e-mail!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter a GitHub link for the project\'s contact: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a GitHub link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide any testing information you wish to include: '
    },
    {
        type: 'loop',
        name: 'credits',
        message: 'Add a contributor? ',
        questions: [{
                type: "input",
                name: "contributor",
                message: "Enter the contributor's name: ",
            },
            {
                type: "input",
                name: "contributorLink",
                message: "Enter the contributor's link: ",
            },
        ],
    },
];



function inititialize() {
    inquirer.prompt(questions).then((answers) => {
            const newIndex = generatePage(answers);
            return writeToFile('./index.html', newIndex);
        }).then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);

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