// imports the gql tagged template function
const { gql } = require("apollo-server-express");

// creates our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        users: [User]
        user(username: String!): User
    }
`;

//exports the typeDefs
module.exports = typeDefs;