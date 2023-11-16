import type {
  QueryResolvers,
  MutationResolvers,
  MatchRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const matches: QueryResolvers['matches'] = () => {
  return db.match.findMany()
}

export const match: QueryResolvers['match'] = ({ id }) => {
  return db.match.findUnique({
    where: { id },
  })
}

export const matchesByChampionship: QueryResolvers['matchesByChampionship'] = ({
  championshipId,
}) => {
  return db.match.findMany({
    where: { championshipId: championshipId },
  })
}

export const createMatch: MutationResolvers['createMatch'] = ({ input }) => {
  return db.match.create({
    data: input,
  })
}

export const updateMatch: MutationResolvers['updateMatch'] = ({
  id,
  input,
}) => {
  return db.match.update({
    data: input,
    where: { id },
  })
}

export const deleteMatch: MutationResolvers['deleteMatch'] = ({ id }) => {
  return db.match.delete({
    where: { id },
  })
}

export const Match: MatchRelationResolvers = {
  championship: (_obj, { root }) => {
    return db.match.findUnique({ where: { id: root?.id } }).championship()
  },
  oak: (_obj, { root }) => {
    return db.match.findUnique({ where: { id: root?.id } }).oak()
  },
  willow: (_obj, { root }) => {
    return db.match.findUnique({ where: { id: root?.id } }).willow()
  },
}
