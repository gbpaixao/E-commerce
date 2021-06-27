import express from 'express'
import routes from './routes/index.routes'

const server = express()

// import database from './database'
// server.get('/', async (req, res) => {
//   const data = await database.select().from('Usuario')

//   if (data.length === 0)
//     return res.json({ message: 'Não foram encontrados registros no BD.' })
//   return res.json({ data })
// })
server.use(routes)

server.listen(process.env.PORT || 3333, () => console.log("Api rodando."))

export default server
