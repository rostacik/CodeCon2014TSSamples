var SeparateFiles;
(function (SeparateFiles) {
    var SomeObject = (function () {
        function SomeObject(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        return SomeObject;
    })();
    SeparateFiles.SomeObject = SomeObject;

    var SomeOtherObject = (function () {
        function SomeOtherObject() {
        }
        return SomeOtherObject;
    })();
    SeparateFiles.SomeOtherObject = SomeOtherObject;
})(SeparateFiles || (SeparateFiles = {}));
//# sourceMappingURL=SomeObject.js.map
