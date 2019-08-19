const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.set('port', process.env.PORT || 3001)
app.locals.boats = ["boat 1", "boat 2", "boat 3"]


app.get('/', (request, response)=> {
  const { boats } = app.locals
  response.status(200).json(boats)
})

app.listen(app.get('port'), () => {
  console.log(`Server is running on ${app.get('port')}`)
})