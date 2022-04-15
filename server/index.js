const express = require('express');

const app = express();
app.use(express.json());

const apiRoutes= require('./routes/route');
//console.log(apiRoutes.getData.AsyncFunction);

app.use('/api', apiRoutes);
app.listen(5200, ()=>{
console.log("server started on port 5200")
})