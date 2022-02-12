const http = require('http');


function datacontroller(req,resp){
    resp.write("<h1> Hello from Node Server </h1>");
    resp.end();
}
http.createServer(datacontroller).listen(8090);

/*http.createServer((req,resp)=>{
    resp.write("<h1> Hello from Node Server </h1>");
    resp.end();
}).listen(8090);*/