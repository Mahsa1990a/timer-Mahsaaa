//node timer1.js 10 3 5 15 9 
//This will make it beep at:

//3 seconds
//5 seconds
//9 seconds
//10 seconds
//15 seconds

//process.stdout.write('\x07');



const alertTerminal = function(time){
//console.log(time)
for(let i = 0 ; i < time.length; i++){
  setTimeout(() => {
    process.stdout.write('\x07'); //for beeping
    console.log(time[i]); // because beeping doesn't work for me
   }, time[i] * 1000); // 5 * 1000 = 5000 ms and ...
}
}
alertTerminal(process.argv.slice(2))
