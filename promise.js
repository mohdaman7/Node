function getData(num){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(num)
        },1000);
    })
}

getData(5).then((res)=>{
    console.log(res)
})