const express = require('express');
const cors = require('cors');
const app = express();
const morgan=require('morgan');
app.use(require('./routes/routes'));
app.use(cors());

//Configuraciones
app.set('port', process.env.PORT || 3333);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(require('./routes/routes'));
app.use('/graphic-cards', require('./routes/cards'));

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
