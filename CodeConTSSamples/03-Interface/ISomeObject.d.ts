declare module SomeModule {
    export interface ISomeObject {
        name: string;
        surname: string;
    }
}

//ak odstránime declare a dropneme .d z názvu súboru kód bude
//opäť fungovať, avšak vygeneruje sa aj prázdny .js file