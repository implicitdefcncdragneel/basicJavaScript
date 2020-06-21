// const sayHello = function(name){
//     return "Hey there," + name + "!"
// }

// console.log(sayHello('Sammy'));




const sayHello = (name)=>"Hey there," + name + "!"


//console.log(sayHello('Sammy'));


const todos = [{
    title:'Buy Bread',
    isDone:true,
},{
    title:'Go to Gym',
    isDone:true,
},{
    title:'Record Youtube video',
    isDone:false,
},{
    title:'Reactjs',
    isDone:false,
},{
    title:'MERN Stack',
    isDone:false,
},{
    title:'Python Crash Course',
    isDone:true
}]

const NotThingsDone =todos.filter((todo)=> 
{
    if(todo.isDone==false)
    {
        console.log(todo.title);
        
    }
})

