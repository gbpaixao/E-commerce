import express from 'express'
import routes from './routes/index.routes'

const server = express()

server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3333, () => console.log("Api rodando."))

export default server
