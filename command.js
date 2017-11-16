const program = require('commander');
const {prompt} = require('inquirer');

const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require('./index');

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
]
program
    .version('1.0.0')
    .description('Clinet Manegment System')

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a Customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({firstname, lastname, phone, email});
//     })

program
    .command('add')
    .alias('a')
    .description('Add a Customer')
    .action(() => {
        prompt(questions)
        .then(answers => addCustomer(answers));
    })


program
    .command('find <name>')
    .alias('f')
    .description('Find a Customer')
    .action(name => findCustomer(name));

program
    .command('update <_id>')
    .alias('u')
    .description('Update a Customer')
    .action(_id => {
        prompt(questions).then(answers => updateCustomer(_id, answers));
    })

program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a Customer')
    .action(_id => removeCustomer(_id));

program
    .command('list')
    .alias('l')
    .description('List a Customers')
    .action(() => listCustomer());

program.parse(process.argv);