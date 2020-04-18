const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.listen(PORT, () => {
  console.log('log in server ' + PORT);
});

app.post('/enrollment', (req, res) => {
  console.log(req.body);
  res.status(200).send({message: 'You\'ve enrolled successfully'});
})

