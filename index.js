const fs =  require('fs')

const rs = fs.createReadStream('lorem.txt',{encoding:'utf-8'});

const ws = fs.createWriteStream('hello.txt');


try{


rs.on('data',(data)=>{
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
     console.log(data)
    console.log(data)
    console.log(data)
})

rs.error('data',(data)=>{
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
     console.log(data)
    console.log(data)
    console.log(data)
})
}catch(error){
    console.log(error.messge);
}
