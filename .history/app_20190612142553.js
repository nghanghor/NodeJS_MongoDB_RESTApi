const express = require('express');
const mongoose = require('mongoose');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const port = (process.env.port || 8080);

const userAuthenticiate = require('./routes/user');

const session = require('express-session');

const MongoDBStore = require('connect-mongodb-session')(session);

//middleware for cross origin resource sharing
app.use(cors());

//middleware for parsing data
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET ,POST , PUT ,DELETE ,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type , Authorization');
    next();
});

app.use(session({
    secret:'My secret',
    resave: false,
    saveUninitialized: false
}));

app.use('/user',userAuthenticiate);

mongoose.connect('mongodb://localhost:27017/RESTApi',
    {useNewUrlParser: true}
).then(result => {
    console.log("mongodb connected");
    app.listen( port ,()=>
        {
            console.log("Server started at "+port);
        }
    );
}).catch(err =>{
    console.log("Error in db connection"+err);
});
    

