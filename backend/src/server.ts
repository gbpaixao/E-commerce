import express from "express";
const server = express();

server.get("/", (request, response) => {
  return response.send("e-commerce api");
});

server.listen(process.env.PORT || 3333);

export default server