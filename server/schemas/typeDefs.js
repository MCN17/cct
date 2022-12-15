// imports the gql tagged template function
const { gql } = require("apollo-server-express");

// creates our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        posts: [Post]
    }

    type Post {
        _id: ID
        postText: String
        createdAt: String
        username: String
        commentCount: Int
        comments: [Comment]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postText: String!): Post
    }

    type Auth {
        token: ID!
        user: User
    }
`;

//exports the typeDefs
module.exports = typeDefs;