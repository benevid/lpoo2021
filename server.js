const http = require ('http');
var formidable = require('formidable');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function(req, res){
    if(req.url == '/enviararquivo'){
       
        const form = formidable({ multiples: true });
 
        form.parse(req, (err, fields, files) => {
          res.writeHead(200, { 'content-type': 'text/html' });
          res.end('Arquivo enviado com sucesso!');
        });
     
        return;
       
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="enviararquivo" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="arquivo" /> <br> ' );
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(port);





// http.Server.listen(port, hostname, () => {
//     console.log(`Servidor rodando em http://${hostname}:${port}/`)
// })

