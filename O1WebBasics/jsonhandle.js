localStorage.clear()

const student = {
    name:'John',
    age:23,
    isActive:true
}

const toStringStu=JSON.stringify(student)

console.log(typeof toStringStu);

localStorage.setItem('student',toStringStu)


const toJSONStu= JSON.parse(toStringStu)

console.log(typeof toJSONStu)

console.log(toJSONStu.age);

console.log(toJSONStu.isActive);






