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
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

    type Auth {
        token: ID!
        user: User
    }
`;

//exports the typeDefs
module.exports = typeDefs;