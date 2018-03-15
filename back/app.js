import express from 'express';

import rotaBatidas from './routes/batidas';

let app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

rotaBatidas(app);

app.listen(3000, () => {
    console.log('Express running');
});