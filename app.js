"use strict";
class Department {
    constructor(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    /*
        コンストラクタでの2重定義を省略する方法もある。
        publicでも明示的に指定する必要がある。
    */
    // constructor(private readonly id: string ,private name: string){
    // }
    describe() {
        console.log(`Department(${this.id}) : ${this.name} `);
    }
    addEmployees(emplpoyee) {
        /*
            readonlyだと値を変更できない
        */
        // this.id = 'd2';
        this.employees.push(emplpoyee);
    }
    printEmployeeInfomation() {
        console.log(this.addEmployees.length);
        console.log(this.addEmployees);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        console.log(this.admins);
    }
    addEmployees(emplpoyee) {
        if (emplpoyee == 'Max')
            return;
        this.employees.push(emplpoyee);
    }
}
const accounting = new Department('d1', 'accounting');
accounting.describe();
accounting.addEmployees('test1');
accounting.addEmployees('test2');
accounting.printEmployeeInfomation();
// private だからアクセスできない
// accounting.employees[2] = 'test3';
const ItAccounting = new ITDepartment('d1', ['max']);
ItAccounting.describe();
ItAccounting.addEmployees('it test1');
ItAccounting.addEmployees('Max');
ItAccounting.addEmployees('it test2');
ItAccounting.printEmployeeInfomation();
