export const schema = gql`
  type Player {
    id: Int!
    name: String!
    sex: String!
    email: String
    height: Int!
    weight: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    entry: [Entry]!
  }

  type Query {
    players: [Player!]! @requireAuth
    player(id: Int!): Player @requireAuth
  }

  input CreatePlayerInput {
    name: String!
    sex: String!
    email: String
    height: Int!
    weight: Int!
  }

  input UpdatePlayerInput {
    name: String
    sex: String
    email: String
    height: Int
    weight: Int
  }

  type Mutation {
    createPlayer(input: CreatePlayerInput!): Player! @requireAuth
    updatePlayer(id: Int!, input: UpdatePlayerInput!): Player! @requireAuth
    deletePlayer(id: Int!): Player! @requireAuth
  }
`
