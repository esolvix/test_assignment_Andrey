import mongoose from 'mongoose';


export default () => {
  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

  mongoose.connection.once('open', () => console.log('connected'));
  mongoose.connection.on('error', error => console.error(error));
};
