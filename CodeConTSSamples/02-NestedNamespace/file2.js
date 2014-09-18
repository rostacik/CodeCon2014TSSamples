var NestedModule;
(function (NestedModule) {
    (function (FirstLevel) {
        (function (SecondLevel) {
            function callMe() {
                console.log('hello from second level');
            }
            SecondLevel.callMe = callMe;
        })(FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
        var SecondLevel = FirstLevel.SecondLevel;
    })(NestedModule.FirstLevel || (NestedModule.FirstLevel = {}));
    var FirstLevel = NestedModule.FirstLevel;

    (function (FirstLevel) {
        (function (SecondLevel) {
            (function (ThirdLevel) {
                function callMe() {
                    console.log('hello from third level');
                }
                ThirdLevel.callMe = callMe;
            })(SecondLevel.ThirdLevel || (SecondLevel.ThirdLevel = {}));
            var ThirdLevel = SecondLevel.ThirdLevel;
        })(FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
        var SecondLevel = FirstLevel.SecondLevel;
    })(NestedModule.FirstLevel || (NestedModule.FirstLevel = {}));
    var FirstLevel = NestedModule.FirstLevel;
})(NestedModule || (NestedModule = {}));
//# sourceMappingURL=file2.js.map
