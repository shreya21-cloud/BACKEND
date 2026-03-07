const fs = require('fs');
const http = require('http');

const server = http.createServer((req ,res) => {

if (req.url === '/file'){
    fs.readFile('data.txt','utf-8',(error,data)=>{
        if (err){
            res.write('error reading file');
        }else{
            res.write(data);
        }
        res.end()
    })
}else{
    res.write(data);
    res.end();
}


});

server.listen(3000);