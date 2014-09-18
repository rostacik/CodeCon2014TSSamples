module NestedModule {
    export module FirstLevel.SecondLevel {
        export function callMe() {
            console.log('hello from second level');
        }
    }

    export module FirstLevel.SecondLevel.ThirdLevel {
        export function callMe() {
            console.log('hello from third level');
        }
    }
}