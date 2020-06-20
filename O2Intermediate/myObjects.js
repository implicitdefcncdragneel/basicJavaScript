let myYoutubeVideoOne = {
     title:'Loops in javascript',
     videoLength:15,
     videoCreator:'Hitesh Choudhary',
     videoDescription:'this is a video description and a long one' 
}

let myYoutubeVideoTwo = {
    title:'Function in javascript',
    videoLength:25,
    videoCreator:'Hitesh Choudhary',
    videoDescription:'this is a video description and a long one' 
}


// // console.log(myYoutubeVideo);

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);




// let courses={
//     name:'Javascript for web developer',
//     price:'199',
//     description:'For Beginner',
//     author:'Hitesh Choudhary'
// }

// console.log(`hey there is a New Course ${courses.name} by ${courses.author} at a price ${courses.price}`);

let timeTaken=function(myObject){
    return {
        formatOne: `Time of this video is: ${myObject.videoLength+2}`,
        formatTwo:`Time of this video is: ${myObject.videoLength+1}`
    }
    
}

let adOne=timeTaken(myYoutubeVideoOne)
console.log(adOne.formatOne);





