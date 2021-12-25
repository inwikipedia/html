const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 7060 });

wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });

  // setInterval(() => {
  //   ws.send('Hi Client' + new Date());
  // }, 3000)
});
