/// <reference path="isomeinterface.d.ts" />
//import validation = require('./ISomeInterface.d');

module SomeModule {
    export class SomeClass implements ISomeInterface {
        doSomething() {
            console.log('do something');
        }
    }
}