const inquier = require('inquirer');
const colors = require('colors')
const KeyManger = require('../libary/KeyManager');


const key =  {
    set() {
        console.log('Hello from set');
    },
    show() {
        console.log('Hello from show');
    },
  remove() {
        console.log('Hello from remove');
    }
}

module.exports = key;