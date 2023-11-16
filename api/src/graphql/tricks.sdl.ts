export const schema = gql`
  type Trick {
    id: Int!
    code: String!
    name: String!
    raidSuccess: Boolean!
    raid: [Raid]!
  }

  type Query {
    tricks: [Trick!]! @requireAuth
    trick(id: Int!): Trick @requireAuth
  }

  input CreateTrickInput {
    code: String!
    name: String!
    raidSuccess: Boolean!
  }

  input UpdateTrickInput {
    code: String
    name: String
    raidSuccess: Boolean
  }

  type Mutation {
    createTrick(input: CreateTrickInput!): Trick! @requireAuth
    updateTrick(id: Int!, input: UpdateTrickInput!): Trick! @requireAuth
    deleteTrick(id: Int!): Trick! @requireAuth
  }
`
