export const schema = gql`
  type Entry {
    id: Int!
    match: Match!
    matchId: Int!
    uniformNumber: Int!
    player: Player!
    playerId: Int!
    team: Team!
    teamId: Int!
    raid: [Raid]!
    dogIn: [CourtStatus]!
    dogOut: [CourtStatus]!
    catIn: [CourtStatus]!
    catOut: [CourtStatus]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    entries: [Entry!]! @requireAuth
    entry(id: Int!): Entry @requireAuth
  }

  input CreateEntryInput {
    matchId: Int!
    uniformNumber: Int!
    playerId: Int!
    teamId: Int!
  }

  input UpdateEntryInput {
    matchId: Int
    uniformNumber: Int
    playerId: Int
    teamId: Int
  }

  type Mutation {
    createEntry(input: CreateEntryInput!): Entry! @requireAuth
    updateEntry(id: Int!, input: UpdateEntryInput!): Entry! @requireAuth
    deleteEntry(id: Int!): Entry! @requireAuth
  }
`
