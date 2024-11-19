var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()

//Connect to mongoose
mongoose.connect(process.env.MONGO_URI)
//Check connection
mongoose.connection.on('connected', () => {
  console.log('connected')
})

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
