const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./dbConnection');
const router = require('./routes');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

// var corsOptions = {
//      origin:'http://localhost:3000',
//      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//      credentials:true,
// }

dotEnv.config();
app.use(express.json());
app.use(morgan('dev'));

//databse connection
connectDb();

app.use('/api',router);
// app.use(express.static(path.join(__dirname,"../build")));

// app.get('*',(req,res) => {
//      res.sendFile(path.join(__dirname,"../build/index.html"));
// });
app.get('/',(req,res) => {
     res.send('Yes i am backend , i am runnig currently..');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT , () => {
     console.log('server running..');
})
