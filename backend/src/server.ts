import express from "express";
import routes from "./routes";

const server = express();

server.get("/", (request, response) => {
  return response.send("e-commerce api");
});
server.use(routes)

server.listen(process.env.PORT || 3333);

export default server