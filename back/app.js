import express from 'express';
let app = express();

app.get('/', (req, res) => {
    res.send('home');
})

app.listen(3000, () => {
    console.log('Express running');
});