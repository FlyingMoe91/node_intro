import http from 'node:http';

const server = http.createServer((req, res) => {
  const { url, method } = req;

  res.setHeader('Content-Type', 'application/json');

  if (url === '/names') {
    const list = ['Patrick', 'Sven', 'Hanna', 'Merle'];
    res.end(JSON.stringify(list));
  } else if (url === '/ages') {
    res.end(`30, 32, 29, 25`);
  } else {
    res.end(`keep on searching`);
  }
});

server.listen(4000);
