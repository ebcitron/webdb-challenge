const server = require("./server.js");

const PORT = 6660;

server.listen(PORT, () => {
  console.log(`\n***\n Listening to http://localhost:${PORT}\n***\n`);
});
