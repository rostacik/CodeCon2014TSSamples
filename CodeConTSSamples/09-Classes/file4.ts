class OverloadClass {
    addCustomer(custId: number);
    addCustomer(company: string);
    addCustomer(value: any) {
        if (value && typeof value == "number") {
            alert("First overload - " + value);
        }
        if (value && typeof value == "string") {
            alert("Second overload - " + value);
        }
    }
}