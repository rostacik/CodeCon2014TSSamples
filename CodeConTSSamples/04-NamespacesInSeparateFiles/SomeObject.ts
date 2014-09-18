module SeparateFiles {
    export class SomeObject implements ISomeObject {
        name: string;
        surname: string;

        constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }
    }

    export class SomeOtherObject implements ISomeOtherObject {
        age: number;
        weneedthishere: string;
    }
}