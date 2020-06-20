let myTodos ={
    day: 'Monday',
    meetings:0,
    meetDone:0,

    addMeeting:function(num){
        this.meetings = this.meetings+num
        
    },

    meetDone1:function(num1){
        this.meetings = this.meetings -num1
        
    },

    summary:function(){
        return `You have ${this.meetings} meetings today!`
    },

    reset:function(){
        this.meetings=0
        this.meetDone=0

    }

}


myTodos.addMeeting(6)
console.log(myTodos.summary());
myTodos.meetDone1(4)
console.log(myTodos.summary());
myTodos.reset()
console.log(myTodos);



