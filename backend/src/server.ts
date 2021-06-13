import express from "express";
const server = express();

server.get("/", (request, response) => {
  return response.send("e-commerce api");
});

server.listen(3030);

export default server