// These are the required references for index, I use an external js file for writing/copying and another for generating the content using my page-template

const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./generateSite.js');

// This portion uses the inquirer package to get user input

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

// I added an email validator to simplify this part and to ensure accurate input

var validator = require("email-validator");

// An array of user prompts in inquirer and using inquirer-loop

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
        message: 'Please enter an office phone number for the Manager: (10 or more digits, only numbers please!)',
        validate: (number) => {
            if((number.length >= 10) && (isNumeric(number))){
                return true; 
            }
            else{ 
                console.log("Please enter 10 or more numbers and do not enter any non numerical characters.");
                return false;}
            // I check that the input is long enough and is actually just numbers, if it isn't it won't accept input and let's user know
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter an email for the Manager: ',
        validate: emailInput => {
            if (validator.validate(emailInput)) {
// using the email-validator package
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
        // using the inquirer-loop package to repeatedly ask what type of emplyee the user would like to add
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
        },{
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub username? ",
            when: ({employeeType})=> employeeType === "Engineer",
            // I an using inquirer - 'when' to ask different questions based on the type of object we will be constructing
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the Intern's school name? ",
            when: ({employeeType})=> employeeType === "Intern"
        },
       ]
    },
];

function isNumeric(string) {
    if (typeof string != "string") return false
    return !isNaN(string) &&
        !isNaN(parseFloat(string))
}
// A helper function to ensure that the string is only numeric characters

function inititialize() {
    inquirer.prompt(questions).then((answers) => {
        return generatePage(answers);
    }).then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
}
// This code handles the responces from inquirer and then directs the data the template to generate the page and writes/copies the files
inititialize();