
const express = require('express');
const app = express();

app.use(express.static('public'));

/* app.get('/:yourName', (req, res) => {
    res.send('Your name:' + req.params.yourName);
}); */
app.get('/', (req, res) => {
    console.log(__dirname + '/index.html')
    res.sendFile(__dirname + '/index.html')
})
app.get('/first', (req, res) => {
    console.log(__dirname + '/public/first.html')
    res.sendFile(__dirname + '/public/first.html')
})
app.get('/second', (req, res) => {
    console.log(__dirname + '/public/second.html')
    res.sendFile(__dirname + '/public/second.html')
})

app.listen(3000, () => console.log('Server running on port 3000'));