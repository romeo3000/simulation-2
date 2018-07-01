
const express = require('express'); 
const bodyParser = require('body-parser'); //To change JSON to JS.
require('dotenv').config(); 

const massive = require('massive'); //To connect to our database at Heroku.
ctrl = require('./controller');

//Configure our server:
const app = express();
app.use(bodyParser.json());




//Connect to database:
massive(process.env.CONNECTION_STRING).then( db => {
    app.listen(port, ()=>console.log(`hard to port ${port}`))
    app.set('db', db)
    console.log('Database Connected')
}).catch(err => console.log(err))

// massive( process.env.CONNECTION_STRING ).then( db => app.set( 'db', db ));


//Property API commands:
app.get('/api/', ctrl.getProperties)

app.post('/api/', ctrl.postProperty)

app.delete('/api/:id', ctrl.deleteProperty)

//Set server to listen for incoming changes.
const port =  3005;
app.listen( port, () => console.log( `Hailing frequencies open on port ${port}...` ));




