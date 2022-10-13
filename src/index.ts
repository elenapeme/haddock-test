import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { router } from './routes/routes'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000
app.use('/api', router)

app.listen(port, () => console.log(`Running on port ${port}`))