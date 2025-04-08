const http= require('http');
const fs= require('fs/promises');
const server=http.createServer(async (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    if(req.url==='/getdata' && req.method==='GET')
        {
            const data= await fs.readFile('./data.json','utf8');
            res.end(JSON.stringify(data));
        }
        else if(req.url==='/setdata' && req.method==='POST')
            {
                let body='';
                req.on('data', chunk => {
                    body += chunk;
                });
                req.on('end', () => {
                    const newData = JSON.parse(body); 
                    });
                }
            });
server.listen(9000,()=>{
    console.log('Server running on port 9000');
 });