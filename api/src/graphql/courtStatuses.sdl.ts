export const schema = gql`
  type CourtStatus {
    id: Int!
    raid: Raid!
    raidId: Int!
    dogIn: Entry
    dogInId: Int
    dogOut: Entry
    dogOutId: Int
    catIn: Entry
    catInId: Int
    catOut: Entry
    catOutId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    courtStatuses: [CourtStatus!]! @requireAuth
    courtStatus(id: Int!): CourtStatus @requireAuth
  }

  input CreateCourtStatusInput {
    raidId: Int!
    dogInId: Int
    dogOutId: Int
    catInId: Int
    catOutId: Int
  }

  input UpdateCourtStatusInput {
    raidId: Int
    dogInId: Int
    dogOutId: Int
    catInId: Int
    catOutId: Int
  }

  type Mutation {
    createCourtStatus(input: CreateCourtStatusInput!): CourtStatus! @requireAuth
    updateCourtStatus(id: Int!, input: UpdateCourtStatusInput!): CourtStatus!
      @requireAuth
    deleteCourtStatus(id: Int!): CourtStatus! @requireAuth
  }
`
