// imports the gql tagged template function
const { gql } = require("apollo-server-express");

// creates our typeDefs
const typeDefs = gql`
    type Query {
        test: String
    }
`;

//exports the typeDefs
module.exports = typeDefs;