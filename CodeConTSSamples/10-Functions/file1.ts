//lambda type
var myAdd: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number { return x + y; };

//optional param
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//default value
function buildNameDef(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

//rest params
function buildNameRest(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

var employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");
var employeeName2 = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie", "Laco Melisko");

function addManyNumbers(...numbers: number[]) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

var res = addManyNumbers(1, 2, 3, 4);