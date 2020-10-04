const inquirer = require('inquirer');
const cleanData = require('./utils/dataCleaner');
const write = require('./utils/export');
const generateMarkdown = require('./src/generateMarkdown');


const promptUserInfo = () => {
    console.log(`
    =============================

    Professional README generator
    
    =============================

*Usuage tip: Empty fields will not be included in the README, so you can skip unless required

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name? (Required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Enter your project name');
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description? (Required)', 
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Heavily recommending that you enter a description for your project');
                    return false;
                }
            }  
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'What is your project\'s license?', 
            choices: ['Unlicense', 'MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0'],
            default: 'Unlicense'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do users install your application?',  
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do users use your application?',  
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How do users contribute?',  
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do users test your application?',  
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email for contact?',  
        },
        {
            type: 'input',
            name: 'contactInfo',
            message: 'Extra contact info for users that have question?',  
        }
    ])
}


promptUserInfo()
    .then(cleanData)
    .then(generateMarkdown)
    .then(write)
    .then(({message}) => console.log (message))
    .catch(err => {
        console.log(err);
    });