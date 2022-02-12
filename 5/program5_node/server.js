const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Inventory = require('./model/Inventory');

const app = express();

const PORT = 9000;
// Add your Mongodb url in below variable...
const MongoDBUrl ='mongodb://localhost:27017/xyz';

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res, next) => {
  let inventory;

  try {
    inventory = await Inventory.find();
  }catch (err) {
    console.log(err);
    return res.send('Error occurred while fetching the data');
  }

  res.json({ inventory: inventory });
})


app.post('/', async (req, res, next) => {
  const inventory=new Inventory({
    name: req.body.name,
  itemPrice: req.body.itemPrice,
  itemId: req.body.itemId,
  itemDescription: req.body.itemDescription,
  });

  try {
    await inventory.save();
  }catch (err) {
    console.log(err);
    return res.send('Error occurred while saving the data');
  }

  res.json({  inventory: inventory });
})

app.delete('/:id', async (req, res, next) => {

const { id } = req.params;

  try {
    await Inventory.findOneAndDelete({itemId:id});
  }catch (err) {
    console.log(err);
    return res.send('Error occurred while deleting the book');
  }

  res.json({ message: 'Book deleted successfully' });
})

mongoose.connect(MongoDBUrl)
.then((res)=>{
console.log("DATABASE CONNECTED")
})
.catch((err)=>{console.log("DATABASE NOT CONNECT")})


app.listen(PORT, () => {
  console.log('Server started on port number 4001');
});

