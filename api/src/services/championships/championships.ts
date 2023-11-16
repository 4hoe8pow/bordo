import type {
  QueryResolvers,
  MutationResolvers,
  ChampionshipRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const championships: QueryResolvers['championships'] = () => {
  return db.championship.findMany()
}

export const championship: QueryResolvers['championship'] = ({ id }) => {
  return db.championship.findUnique({
    where: { id },
  })
}

export const createChampionship: MutationResolvers['createChampionship'] = ({
  input,
}) => {
  return db.championship.create({
    data: input,
  })
}

export const updateChampionship: MutationResolvers['updateChampionship'] = ({
  id,
  input,
}) => {
  return db.championship.update({
    data: input,
    where: { id },
  })
}

export const deleteChampionship: MutationResolvers['deleteChampionship'] = ({
  id,
}) => {
  return db.championship.delete({
    where: { id },
  })
}

export const Championship: ChampionshipRelationResolvers = {
  match: (_obj, { root }) => {
    return db.championship.findUnique({ where: { id: root?.id } }).match()
  },
}
