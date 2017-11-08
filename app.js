const express = require('express');
const http = require('http');
const path = require('path');

const api = require('./server/routes/api');

//const publicweb = process.env.PUBLICWEB || './dist/publicweb';
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.listen(process.env.PORT || 8080);
//console.log(`serving ${publicweb}`);
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// const port = process.env.PORT || '3001';
// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port, () => console.log(`API running on localhost:${port}`));
