import express from 'express'
import database from './database'
import routes from './routes/index.routes'

const server = express()

server.get('/', async (req, res) => {
  const data = await database.select().from('Usuario')

  if (data.length === 0)
    return res.json({ message: 'Não foram encontrados registros no BD.' })
  return res.json({ data })
})
server.use(routes)

server.listen(process.env.PORT || 3333)

export default server
