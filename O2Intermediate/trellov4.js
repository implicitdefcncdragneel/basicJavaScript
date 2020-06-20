const myTodos=['Buy Bread','Go to Gym','Record Youtube video']

//console.log(myTodos.indexOf('Buy Bread'));

const newTodos=[{
    title:'Buy Bread',
    isDone:false,
},{
    title:'Go to Gym',
    isDone:false,
},{
    title:'Record Youtube video',
    isDone:true,
}]

// const index =newTodos.findIndex(function(todo,index){
//     return todo.title ===' Go to Gym'
// })

// console.log(index);


//Method 1

// const findTodo = function(myTodos,title){
//     const index = myTodos.findIndex(function(todo,index){ // array object
//         return todo.title.toLowerCase()=== title.toLowerCase()
//     })
//     return myTodos[index]
// }


// let printMe = findTodo(newTodos,'Go To Gym')
// console.log(printMe);





//Method 2
const findTodo =function(myTodos,title){
    const titleReturned =myTodos.find(function(todo,index){
        return todo.title.toLowerCase()=== title.toLowerCase()
    })
    return titleReturned
}

let printMe =findTodo(newTodos,'Go To gym')
console.log(printMe);





