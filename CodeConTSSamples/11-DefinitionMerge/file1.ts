module Animals {
    export class Zebra { }
}

module Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

var box: Box = { height: 5, width: 6, scale: 10 };