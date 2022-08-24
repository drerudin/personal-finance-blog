// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Thought {
  _id: ID
  thoughtText: String
  createdAt: String
  username: String
  reactionCount: Int
  reactions: [Reaction]
}

type Reaction {
  _id: ID
  reactionBody: String
  createdAt: String
  username: String
}

type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  thoughts: [Thought]
  friends: [User]
}

type Query {
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  thought(_id: ID!): Thought
}

input ThoughtInput {
  thoughtText: String!
  username: String!
}

input ReactionInput {
  reactionBody: String!
  username: String!
  thoughtId: ID!
}

input UserInput {
  username: String!
  email: String!
}

type Mutation {
  createThought(thoughtInput: ThoughtInput): Thought
  createReaction(reactionInput: ReactionInput): Thought
  createUser(userInput: UserInput): User
}
`;

// export the typeDefs
module.exports = typeDefs;