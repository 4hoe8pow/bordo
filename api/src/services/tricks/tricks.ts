import type {
  QueryResolvers,
  MutationResolvers,
  TrickRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tricks: QueryResolvers['tricks'] = () => {
  return db.trick.findMany()
}

export const trick: QueryResolvers['trick'] = ({ id }) => {
  return db.trick.findUnique({
    where: { id },
  })
}

export const createTrick: MutationResolvers['createTrick'] = ({ input }) => {
  return db.trick.create({
    data: input,
  })
}

export const updateTrick: MutationResolvers['updateTrick'] = ({
  id,
  input,
}) => {
  return db.trick.update({
    data: input,
    where: { id },
  })
}

export const deleteTrick: MutationResolvers['deleteTrick'] = ({ id }) => {
  return db.trick.delete({
    where: { id },
  })
}

export const Trick: TrickRelationResolvers = {
  raid: (_obj, { root }) => {
    return db.trick.findUnique({ where: { id: root?.id } }).raid()
  },
}
