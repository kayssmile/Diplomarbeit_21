// import functions 

import express from 'express';
import { ApolloServer, gql} from 'apollo-server-express';
import cors from 'cors';
import mysql from 'mysql2/promise';
// import fetch from 'node-fetch';


// Variablen Deklarationen

var todos = [

    {Entry: "Aurischen Koerper veraendern", State: "Open"},
    {Entry: "Portfolio", State: "Open"},
    {Entry: "GitHub Account ready machen", State: "Open"},
    {Entry: "Gemuetlich schlafen gehen", State: "Open"}

];

const example = "hello du";

// Datenbank integrieren

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
   });


const typeDefs = gql`

type Mutation {
    createUser(firstname: String!, lastname: String!, username: String!, password: String!): User!
    
}

type Query {
    todos: [todos]!
    time: String
    todo(id : Int!): [todos]
    hello: String!
    user(id: ID!): User
    users(limit: Int = 8, offset: Int = 0): [User!]
    newtodo(Entry: String!, State: String!): String
}

type todos{
     Entry: String!
     State: String!
     id: Int!
     created: String! 
}

type User{
     firstname: String!
     lastname: String!   
}

`;

const todo = ["buegele", "lachen", "tanzen"];

// Resolver

const resolvers = {

        Mutation: {

            createUser: async (obj, args, context, info) => {
                const [result] = await context.db.execute(`
                INSERT INTO user (firstname, lastname, username, password) VALUES (?, ?, ?, ?)
                `, [args.firstname, args.lastname, args.username, args.password])},
        
        },

        Query: {

        newtodo: async (obj, args, context, info) => {
            let [result] = await context.db.execute(`
            INSERT INTO todo_app(Entry, State) VALUES (?, ?)`,
            [args.Entry, args.State]);
        },

        todos: async (obj, args, context, info) => {
            let [result] = await context.db.execute(`
            SELECT * FROM todo_app`);
            return result;
        },

        users: async (obj, args, context, info) => {
            const [users] = await context.db.query(
            `SELECT firstname, lastname from user LIMIT ? OFFSET ?`,
            [args.limit, args.offset]
            );
            return users;
        },
            
        todo: async (_, args, context, info) => {
            const number = args.id;
            return todos[number];
        },
            
        hello: async () => {
            return "hiii";
        },
            
        time: async () => {
            
            const time = new Date();
            return `${time.getHours()}:${time.getMinutes()}`
            
        }
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
   
