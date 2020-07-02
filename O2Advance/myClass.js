class User{
    constructor(firstName,lastName,credit){
        this.firstName=firstName
        this.lastName=lastName
        this.credit=credit
    }

    getFullName(){
        let fullName=`${this.firstName} ${this.lastName} is my full name`
        return fullName
    }

    editName(newname){
        const myname=newname.split(' ')
        this.firstName=myname[0]
        this.lastName=myname[1]
    }
}



class Teacher extends User{
    constructor(firstName,lastName,credit,subject){
        super(firstName,lastName,credit)
        this.subject=subject
    }
    getFullName =()=>{ return `${this.firstName} ${this.lastName} is my full name and teaches ${this.subject}`}
}


//const john = new User("John","Anderson",34)
const john = new Teacher("John","Anderson",34,"javascript")

console.log(john.getFullName());
john.editName("Johnny Anderson")
console.log(john.getFullName());




