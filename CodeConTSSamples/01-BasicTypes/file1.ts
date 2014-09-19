//bool
var isDone: boolean = false;

//number
var height: number = 6;

//string
var name: string = "bob";
name = 'smith';

//array
var list: number[] = [1, 2, 3];
var list2: Array<number> = [1, 2, 3];

//enum
enum Color { Red, Green, Blue };
var c: Color = Color.Green;
c = Color.Red;

//any
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

function warnUser(): void {
    alert("This is my warning message");
}

function writeToConsole() {
    console.log('ha!');
}