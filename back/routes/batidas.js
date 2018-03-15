import db from '../db';

export default (app) => {
    
    app.get('/batidas', (req, res) => {
        const batidas = db.mongoose.model('batidas', db.models.batidas, 'batidas');
        batidas.find({}).lean().exec(
            function (error, result) {
                if (!error) {
                    res.send(result);
                } else {
                    console.log(error);
                }    
            }
        );
    });
}