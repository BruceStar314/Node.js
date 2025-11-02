const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManger {
constructor() {

    this.conf = new Configstore(pkg.name);
}

set(key) {

    this.conf.set('apiKey',key);
    return key;
}

get(key) {
    this.conf.get('apiKey');

    if (!key) {
        throw new Errror('No API key found')
    }
    return key;
}

deleteKey(){
    const key = this.conf.get('apiKey');

    if (!key) {
        throw new Error ('No API key fouund')
    }
    this.conf.delete('apiKey');

    return;
}
}

module.exports = KeyManger;