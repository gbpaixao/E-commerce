import express from "express";
import serverless from "serverless-http";
const server = express();

server.get("/", (request, response) => {
  return response.send("e-commerce api");
});

server.listen(3030);

// export default server;
module.exports.handler = serverless(server)