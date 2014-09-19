import validation = require('./ISomeInterface.d');

module SomeModule {
    export class SomeClass implements validation.ISomeInterface {
        doSomething() {
            console.log('do something');
        }
    }

}

export = SomeModule;
