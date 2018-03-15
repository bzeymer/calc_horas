export default (mongoose) => { 
    return new mongoose.Schema({
        tipo: String,
        hora: Date,
        createdAt: { type: Date, default: Date.now }
    }, {
        collection: 'batidas'
    })
}