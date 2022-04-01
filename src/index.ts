import express from 'express'
import { router } from './router'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('server is running 👨‍🚀')
})

app.use(router)

app.listen(3333, () => console.log('Server is Running 🚀'))