var SomeModule;
(function (SomeModule) {
    "use strict";

    //will not be exposed to outside
    var SomeOtherModule;
    (function (SomeOtherModule) {
        function someHelper() {
            console.log('aaa');
        }
        SomeOtherModule.someHelper = someHelper;
    })(SomeOtherModule || (SomeOtherModule = {}));

    //all exported stuff will be exposed to outside
    (function (SomeOtherModuleExported) {
        function someHelperExported() {
            SomeOtherModule.someHelper();
        }
        SomeOtherModuleExported.someHelperExported = someHelperExported;
    })(SomeModule.SomeOtherModuleExported || (SomeModule.SomeOtherModuleExported = {}));
    var SomeOtherModuleExported = SomeModule.SomeOtherModuleExported;
})(SomeModule || (SomeModule = {}));
//# sourceMappingURL=file1.js.map
