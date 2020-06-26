const { ApolloServer, gql } = require("apollo-server");

//servidor
const server = new ApolloServer();

//arrancar el servidor

server.listen().then(({ url }: { url: any }) => {
  console.log(`servidor listo en la URL ${url}`);
});
