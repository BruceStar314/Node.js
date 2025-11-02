const inquirer = require('inquirer').default;
const colors = require('colors')
const KeyManger = require('../library/KeyManager');
const { isRequired } = require('../utils/validation')


const key =  {
    async set() {
    const keyManger = new KeyManger();
    const input = await inquirer.prompt([
        {
            type: 'input', 
            name: 'key',
            message: colors.green('Enter your API key:'),
            validate: isRequired 
        }
    ]);

    const key = keyManger.set(input.key);
    if (key) {
        console.log(colors.blue('API key set'));
    }
    },
    show() {
    try {
const keyManger = new KeyManger();
const key = keyManger.getKey();

console.log(('Current API key is:'), colors.yellow(key));
    } catch (error){
console.error(colors.red(error.message));
    }
    },
  remove() {
try {
const keyManger = new KeyManger();
keyManger.deleteKey();

console.log(colors.blue('API key removed'));
return;
    } catch (error){
console.error(colors.red(error.message));
    }
    }
}

module.exports = key;