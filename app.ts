class Department
{
    private readonly id: string;
    private name: string;
    protected employees: string[] = [];

    constructor(id: string ,n: string){
        this.id = id;
        this.name = n;
    }

    /*
        コンストラクタでの2重定義を省略する方法もある。
        publicでも明示的に指定する必要がある。
    */
    // constructor(private readonly id: string ,private name: string){

    // }

    describe(this: Department){
        console.log(`Department(${this.id}) : ${this.name} ` );
    }

    addEmployees(emplpoyee: string) {
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

const department = new Department('d1', 'department');
department.describe();

department.addEmployees('test1');
department.addEmployees('test2');
department.printEmployeeInfomation();


// private だからアクセスできない
// department.employees[2] = 'test3';


class ITDepartment extends Department
{
    private admins: string[];

    // super は継承元のconstructorに値を渡す
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
        console.log(this.admins);
    }

    addEmployees(emplpoyee: string) {
        if (emplpoyee == 'Max') return;
        this.employees.push(emplpoyee);
    }
}


const ItDepartment = new ITDepartment('d2', ['max']);
// superをしているからここで出力できる
ItDepartment.describe();

ItDepartment.addEmployees('it test1');
ItDepartment.addEmployees('Max');
ItDepartment.addEmployees('it test2');
ItDepartment.printEmployeeInfomation();


class AccountingDepartment extends Department
{
    constructor(id: string, private report: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.report.push(text);
    }

    printReports() {
        console.log(this.report);
    }
}

const accounting = new AccountingDepartment('d3', []);
accounting.describe();
accounting.addReport('something');
accounting.printReports();
