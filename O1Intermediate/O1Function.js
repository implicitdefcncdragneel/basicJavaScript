let sayHello = function(name){
    
    console.log(`Greeting message for ${name}`);
    
    console.log(`Hey ${name}`);
    
    }

//sayHello('John')

let fullName= function(firstname,lastname){
    console.log('Welcome to lco');
    console.log(`Happy to have you,${firstname} ${lastname}`);

}


//fullName('John','Doe')


let myAdder=function(num1,num2){
    let added =num1+num2
    return added
}

//result=myAdder
//console.log(myAdder(3,5))

let myMultipler=function(num1,num2){
    let mux =num1*num2
    return mux
}


console.log(myMultipler(2,5));
