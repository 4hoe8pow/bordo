export const schema = gql`
  type Raid {
    id: Int!
    raider: Entry!
    raiderId: Int!
    pointFor: Int!
    pointAgainst: Int!
    doOrDieCount: Int!
    duration: Int!
    trick: Trick!
    trickCode: String!
    opportunity: Int!
    isBonus: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    courtStatus: [CourtStatus]!
  }

  type Query {
    raids: [Raid!]! @requireAuth
    raid(id: Int!): Raid @requireAuth
  }

  input CreateRaidInput {
    raiderId: Int!
    pointFor: Int!
    pointAgainst: Int!
    doOrDieCount: Int!
    duration: Int!
    trickCode: String!
    opportunity: Int!
    isBonus: Boolean!
  }

  input UpdateRaidInput {
    raiderId: Int
    pointFor: Int
    pointAgainst: Int
    doOrDieCount: Int
    duration: Int
    trickCode: String
    opportunity: Int
    isBonus: Boolean
  }

  type Mutation {
    createRaid(input: CreateRaidInput!): Raid! @requireAuth
    updateRaid(id: Int!, input: UpdateRaidInput!): Raid! @requireAuth
    deleteRaid(id: Int!): Raid! @requireAuth
  }
`
