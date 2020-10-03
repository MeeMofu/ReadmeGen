const inquirer = require('inquirer');

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
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Enter your github username');
                    return false;
                }
            }    
        }
    ])
}


promptUserInfo()
    .then(data => console.log(data))