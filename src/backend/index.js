// import functions 

import express from 'express';
import { ApolloServer, gql} from 'apollo-server-express';
import cors from 'cors';
import mysql from 'mysql2/promise';
// import fetch from 'node-fetch';






// Datenbank integrieren

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "estates"
   });

 




const typeDefs = gql`

    type Query {
        estates: [estates]!
    }

    type estates{
        id: Int!
        title: String!
        description: String!
        country: String!
        canton: String!
        city: String!
        zip: Int!
        availability: String!
        prize: Int!
        estate_type: String!
        lat: Float!
        long: Float!
        usable_area: Int!
        ref_type_id: Int!
        created_at: String!
        updated_at: String!
    }

`;

// Resolver

const resolvers = {
        Query: {
        estates: async (obj, args, context, info) => {
            let [result] = await context.db.execute(`
            SELECT * FROM estates`);

           // console.log(result);

            return result;
        },
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      db: connection
    }
});

await server.start();

// const server = new ApolloServer({ typeDefs, resolvers });
// await server.start();
   
const app = express();
app.use(cors()); // Erlaubt CORS Requests
server.applyMiddleware({ app });

   
app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
   

// Verbindung abbauen

const shutdownHandler = () => {
    console.log('closing all connections...');
    server.close(() => {
      connection.destroy();
      console.log('shutting down...');
      process.exit();
    });
   };
process.on('SIGINT', shutdownHandler);
process.on('SIGTERM', shutdownHandler);
   
