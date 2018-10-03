const express = require('express');
const graphqlHTTP = require('express-graphql');
const { ApolloServer, gql } = require('apollo-server');
const schema = require('./schema/schema');
//const resolvers = require('./schema/resolvers');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://ashish:test123@ds213118.mlab.com:13118/gql-ninja');
mongoose.connection.once('open',() => {
    console.log('connected to database...')
});

//middleware using express
//bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// const server = new ApolloServer({
//     typeDefs: schema,
//     resolvers,
//   });
  
// server.applyMiddleware({ app, path: '/graphql' });

app.listen(2020, () => {
    console.log('now listening for requests on port 2020...');
});