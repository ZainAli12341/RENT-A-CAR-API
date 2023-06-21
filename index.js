const express = require('express')
const port = 5000;
const app = express();
const colors =require('colors')


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/rentacar',require('./routes/cars_routes'));
app.use('/api/rentacar',require('./routes/harm_recovery_routes'));
app.use('/api/rentacar',require('./routes/orders_routes'));
app.use('/api/rentacar',require('./routes/parts_routes'));
app.use('/api/rentacar',require('./routes/customers_routes'));





app.listen(port,()=>console.log(`SERVER IS LISTENING ON ${port} .......`.yellow.bold.italic))


console.log("AUTHOR :- ZAIN ALI SULEHRI :- THIS IS A RENT A CAR API  EST. IN 2023 ".yellow.bold.italic)