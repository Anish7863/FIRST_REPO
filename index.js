const fs =  require('fs')

const rs = fs.createReadStream('lorem.txt',{encoding:'utf-8'});

const ws = fs.createWriteStream('hello.txt');



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
