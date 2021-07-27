const apolloServer = require("./apolloServer");
const { server } = require("./config");
const app = require("./server");

async function start() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
start()
  .then(() => {
    app.listen({ port: server.PORT }, () =>
      console.log(
        `🚀 Server ready at http://localhost:${server.PORT}${apolloServer.graphqlPath}`
      )
    );
  })
  .catch(() => console.log("Something went wrong, try again"));
