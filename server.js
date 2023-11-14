const express = require('express')
const app = express()
const port = 3001
const ekstrarouter = require('./router/ekstrakulikulerRoutes')
const connectDB = require('./config/config')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(ekstrarouter)

connectDB()

app.listen(port, () => {
  console.log(`Server run on port ${port}`)
})