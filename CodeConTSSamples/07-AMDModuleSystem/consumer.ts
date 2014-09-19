import someClass = require('./SomeClass');

module ConsumerModule {
    export class ConsumerClass {
        callDependency() {
            var sc = new someClass.SomeClass();
            sc.doSomething();
        }
    }
}

export = ConsumerModule;