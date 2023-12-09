const express = require('express');
const {ApolloServer} = require('@apollo/server');
const {expressMiddleware} = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
require("./connections/connections");
const destinations = require("./models/Destinations");
const hostels = require("./models/Hostels")
const { default: mongoose } = require('mongoose');
const typeDefs = require("./graphql/typeDef");
const resolvers = require("./graphql/resolvers")


async function startServer(){
    const app = express();
    const server = new ApolloServer({typeDefs, resolvers});

    app.use(bodyParser.json());

    app.use(cors());

    await server.start();
    app.use('/graphql', expressMiddleware(server));
    app.listen(8000, ()=>{console.log("working on port 8000")})

}
startServer()

