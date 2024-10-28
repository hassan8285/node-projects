let a=30;
let b=40;
let waitingData=new Promise((resolve)=>{
    setTimeout(() => {
        resolve(30);

    }, 2000)

})
waitingData.then((data)=>{
    b=data;
    console.log(a+b)
}

)