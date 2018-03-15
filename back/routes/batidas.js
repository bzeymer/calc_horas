import mysql from 'mysql';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'my_app'
});

export default (app) => {

    app.get('/batidas', (req, res) => {
        connection.query('select * from batidas', (error, result) => {
            if (!error) {
                res.send(result);
            } else {
                res.send(error);
            }
        });
    });
}