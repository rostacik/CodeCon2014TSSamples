var SomeModule;
(function (SomeModule) {
    var SomeObject = (function () {
        function SomeObject() {
        }
        return SomeObject;
    })();
    SomeModule.SomeObject = SomeObject;
})(SomeModule || (SomeModule = {}));
//# sourceMappingURL=code.js.map
