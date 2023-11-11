function handeleTimeOut() {
    console.log('time out');
}

const handeleTimeOut2 = () => { console.log("time out") }

setTimeout(handeleTimeOut,1000);
setTimeout(handeleTimeOut2,2000);
setTimeout(() => {console.log("Time out")},3000);

// we can also pass it through any function

function greeter(greet){
    greet();
}

greeter(() => {console.log("Hello")});