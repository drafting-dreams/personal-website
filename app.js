const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, resp) {
  console.log('hello')
  resp.sendFile(`${__dirname}/dist/index.html`)
})

app.use(express.static('dist'), express.static('dist'))

app.get('*', function (req, resp) {
  console.log('hi')
  resp.redirect('/')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
