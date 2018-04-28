const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage

app.post('/', function (req, res) {
    console.log('this is post');
    console.log('body', req.body);
  res.send('done')
})
,
app.get('/getName', function(req, res) {
    console.log(req.query);
    console.log(parseInt(req.query.age));
    res.send('this is another page');
})
app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})
