module AmbientModule {
    declare var nonexistingObj: Ambient.ISomeAmbientInterface;

    var a = nonexistingObj.name;
}