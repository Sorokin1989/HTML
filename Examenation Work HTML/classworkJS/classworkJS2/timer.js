
// function test() {
//     console.log('hello world '+ count++);
    
// }
// let count=0;

// setInterval(test,1000)
//  setTimeout(test,5*1000)
let count=0;
// setInterval(() => {
//      console.log('hello world '+ count++);
// }, 1000);

// setTimeout(() => {
//     console.log('hello world '+ count++);
// }, 2000);


// setInterval(() => {
//      console.log('hello world '+ count++);
//      if(count==10) {
//         return;
//      }
// }, 1000);

let id=setInterval(() => {
     console.log(id+'hello world '+ count++);
     if(count==10) {
    //    clearInterval(id);
       clearTimeout(id);
     }
}, 1000);