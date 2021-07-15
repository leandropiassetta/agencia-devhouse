const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog',(req, res) => {
  res.sendFile(__dirname + '/views/blog.html')
})

app.get('/maintenance', (req, res) => {
  res.sendFile(__dirname + '/views/maintenance.html');
});


app.listen(port, () => console.log(`The server is runing... at http://localhost:${port}`));
