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


class ITDepartment extends Department
{
    private admins: string[];

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
