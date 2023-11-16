export const schema = gql`
  type Championship {
    id: Int!
    holdOn: DateTime!
    title: String!
    match: [Match]!
  }

  type Query {
    championships: [Championship!]! @requireAuth
    championship(id: Int!): Championship @requireAuth
  }

  input CreateChampionshipInput {
    holdOn: DateTime!
    title: String!
  }

  input UpdateChampionshipInput {
    holdOn: DateTime
    title: String
  }

  type Mutation {
    createChampionship(input: CreateChampionshipInput!): Championship!
      @requireAuth
    updateChampionship(
      id: Int!
      input: UpdateChampionshipInput!
    ): Championship! @requireAuth
    deleteChampionship(id: Int!): Championship! @requireAuth
  }
`
