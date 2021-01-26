const http = require('http');

const requestHandler = (request, response) => {
  let url = request.url;
  let method = request.method;

  response.setHeader('Content-Type', 'text/html');

  if (url === '/message' && method === 'POST') {
    const body = [];

    //listeners
    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const name = parseBody.split('=')[1];
      response.write('<html>');
      response.write('<h1>Welcome ' + name + '</h1>');
      response.write('</html>');
      response.end();
    });
    //end listeners
  }

  if (url === '/') {
    response.write('<html>');
    response.write('<h1>hello world, this is a node server basic</h1>');
    response.write('<p>Human, What is your name?<p/>');
    response.write('<form action="/message" method="POST">');
    response.write('<input type="text" name="message" /><br>');
    response.write('<button type="submit">OK</button><br>');
    response.write('</form>');
    response.write('</html>');
    response.end();
  }
};

module.exports.handler = requestHandler;
