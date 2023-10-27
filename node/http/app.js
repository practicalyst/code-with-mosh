const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
}); 

// server.on('connection', (socket) => {
//     console.log(socket);
//     console.log('New connection...');
// });


server.listen(3000);

