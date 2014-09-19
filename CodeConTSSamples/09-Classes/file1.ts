class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    static greetStatic(): void {
        console.log('static thing');
    }
}

var greeter = new Greeter("world");
Greeter.greetStatic();