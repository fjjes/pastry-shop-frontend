const express = require('express')
//const path= require('path')
require('./model/loadScenes')

const ordersRoutes = require('./routes/orders')
const waiterRoutes = require('./routes/waiter')

const app = express()

app.use('/api/orders', ordersRoutes);
app.use('/api/waiter', waiterRoutes);

//app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.redirect('waiter/intro')
    
})

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`)
})