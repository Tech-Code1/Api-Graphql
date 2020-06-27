const { ApolloServer, gql } = require("apollo-server");

//schema
const typeDefs = gql`

type Curso {
    titulo: String
    tecnología: String
}

type Query {
    obtenerCursos : Curso
}
`;

const cursos = [
  {
    titulo: "JavaScript Moderno Guía Definitiva Construye +10 Proyectos",
    tecnologia: "JavaScript ES6",
  },
  {
    titulo: "React – La Guía Completa: Hooks Context Redux MERN +15 Apps",
    tecnologia: "React",
  },
  {
    titulo: "Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s",
    tecnologia: "Node.js",
  },
  {
    titulo: "ReactJS Avanzado – FullStack React GraphQL y Apollo",
    tecnologia: "React",
  },
];

//Resolvers
const resolvers = {
  Query: {
    obtenerCursos: () => cursos[0],
  },
};

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//arrancar el servidor

server.listen().then(({ url }: { url: any }) => {
  console.log(`servidor listo en la URL ${url}`);
});
