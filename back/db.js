import mongoose from 'mongoose';

import batidaSchema from './models/batida';

mongoose.connect('mongodb://localhost:27017/app_db');
const models = {};

models.batidas = batidaSchema(mongoose);

export default {mongoose, models};