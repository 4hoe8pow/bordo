export const schema = gql`
  type Match {
    id: Int!
    sex: String!
    championship: Championship!
    championshipId: Int!
    oak: Team!
    oakId: Int!
    oakScore: Int!
    willow: Team!
    willowId: Int!
    willowScore: Int!
    nextMatchId: Int
    entry: [Entry]!
  }

  type Query {
    matches: [Match!]! @requireAuth
    match(id: Int!): Match @requireAuth
    matchesByChampionship(championshipId: Int!): [Match!]! @requireAuth
  }

  input CreateMatchInput {
    sex: String!
    championshipId: Int!
    oakId: Int!
    oakScore: Int!
    willowId: Int!
    willowScore: Int!
    nextMatchId: Int
  }

  input UpdateMatchInput {
    sex: String
    championshipId: Int
    oakId: Int
    oakScore: Int
    willowId: Int
    willowScore: Int
    nextMatchId: Int
  }

  type Mutation {
    createMatch(input: CreateMatchInput!): Match! @requireAuth
    updateMatch(id: Int!, input: UpdateMatchInput!): Match! @requireAuth
    deleteMatch(id: Int!): Match! @requireAuth
  }
`
