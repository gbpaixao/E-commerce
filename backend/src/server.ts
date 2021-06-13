import express from "express";
import routes from "./routes";
import database from "./database"

const server = express();

server.get("/", async (req, res) => {
  
  try {
    const answer = await database.select().from(`Usuario`);

    if (answer.length === 0) return res.send({message: 'Não existem registros no BD.'})
    return res.send({answer});
} catch (error) {
  console.log(`error: `, error)
}
});
server.use(routes)

server.listen(process.env.PORT || 3333);

export default server