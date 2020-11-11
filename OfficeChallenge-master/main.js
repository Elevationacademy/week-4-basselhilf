//write your code here to make the tests pass
class Document {
    constructor(EmployeeName){
    this.EmployeeName =EmployeeName 
    }
}
class Employee{
    constructor(name){
        this.name=name
    }
    work(office){
        for(let i=0 ; i<10 ; i++){
            const w = new Document (this.name)
            office.documents.push(w)
        }
    }

    
}
class Manager{
    constructor(name){
        this.name=name
        this.employees=[]
    }
    hireEmployee(name){
        this.employees.push(new Employee(name));
    }
    askEmployeesToWork(office){
        for(let employee of this.employees){
            employee.work(office)
        }
    }
}

class Cleaner {
    constructor(name){
        this.name=name
    }
    clean(){
        console.log("Clean")
    }
}

class Office{
    constructor(){
        this.documents=[]
        this.managers=[]
        this.cleaners=[]
    }
    hireManager(name){
        this.managers.push(new Manager(name))
    }
    hireCleaner(name){
        this.cleaners.push(new Cleaner(name) )
    }
    startWorkDay(){
       for(let manager of this.managers){
           manager.askEmployeesToWork(this)
       } 
       for(let cleaner of this.cleaners){
        cleaner.clean()
    } 
    }
}