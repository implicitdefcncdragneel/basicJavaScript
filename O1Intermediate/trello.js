//  const days=['mon','tue','wed','thur','fri','sat','sun']
 
//  for (let index = 0; index < days.length; index++) {
//     //  const element = days[index];
//     //  console.log(element);
//      console.log(days[index]);
     
//  }


// const myTodos=[]

// myTodos.push('Buy Bread')
// myTodos.push('Hello CnC')
// myTodos.push('Dragneel')

// myTodos.forEach(function(todo,index){
//     console.log(`Your task no. ${index+1} is: ${todo}`);
     
// })


// const todo =['JavaScript','Java','Python','C#','Scala']

// todo.forEach(function(todo1,index){
//     console.log(`Programming Language ${todo1} --Prority ${index}`);
    
// })


const myTodos=[]

myTodos.unshift('JavaScript')
myTodos.unshift('Java')
myTodos.unshift('Python')
myTodos.unshift('C#')
myTodos.unshift('Scala')

for (let index = 0; index <= myTodos.length-1; index++) {
    console.log(myTodos[index]);
    
    
}