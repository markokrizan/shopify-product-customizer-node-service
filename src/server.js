const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {getProductByHandle, addToCart} = require('./shopifyService');



const app = express();

const port = 3000 || process.env.APP_PORT;

app.use(bodyParser.json());

app.use(
  cors({
    origin: 'http://localhost',
  })
)

app.get('/product/:handle', async (req, res) => {
  res.json(await getProductByHandle(req.params.handle))
})

app.post('/', async (req, res) => {
  res.send('Got a POST request')
})

app.listen(port, () => console.log(`Started. Running on port ${port}`));