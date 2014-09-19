class SomeAnimal {
    private privateName: string;
    public publicString: string;

    constructor(private name: string) { }

    move(meters: number) {
        this.privateName = "abcd";
        this.publicString = "efgh";
        alert(this.name + " moved " + meters + "m.");
    }
}

var a = new SomeAnimal('name');
//a.privateName = 'qqq';