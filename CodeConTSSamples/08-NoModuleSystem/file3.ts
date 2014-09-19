module MyModule3 {
    export class MyClass3 {
        public callMeBaby1() {
            var a = new MyModule1.MyClass1();
            a.callMeBaby();
        }

        public callMeBaby2() {
            var a = new MyModule2.MyClass2();
            a.callMeBaby();
        }

        public callMeBabySubfolder() {
            var a = new MySubfolderModule3.MySubfolderClass3();
            a.callMeBaby();
        }
    }
}