module SomeModule {
    "use strict";

    //will not be exposed to outside
    module SomeOtherModule {
        export function someHelper() {
            console.log('aaa');
        }
    }

    //all exported stuff will be exposed to outside
    export module SomeOtherModuleExported {
        export function someHelperExported() {
            SomeOtherModule.someHelper();
        }
    }
}