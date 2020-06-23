//alert('File is attached')

// console.log(document.title);
// document.title ='I got changed'


// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));


// const myElement =document.querySelectorAll('p')
// console.log(myElement[0]);

// const myElement =document.querySelectorAll('#idone')
// console.log(myElement[0]);


// const myElement =document.querySelectorAll('.classone')
// console.log(myElement[0]);


// const myPElements =document.querySelector('p')
// myPElements.textContent='I am being changes using js'


const myPElements =document.querySelectorAll('p')

// myPElements.forEach(function(p){
//     p.textContent='I am changed using loop in js'
// })

myPElements.forEach((p) => {return p.textContent='I am changed using loop in js using arrow function'})

const myNewPara =document.createElement('p')
myNewPara.textContent='I was added via js'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event)=>{
    //console.log(event);
    event.target.textContent='I was Clicked'
})

//track input form

document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value);
    
})