const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const productsR = require('./routes/products')


app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use('/products', productsR)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })