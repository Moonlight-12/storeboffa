const express = require('express')
const app = express()
const port = 3000

app.use("/app", require('./route'))

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})