import type {
  QueryResolvers,
  MutationResolvers,
  EntryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const entries: QueryResolvers['entries'] = () => {
  return db.entry.findMany()
}

export const entry: QueryResolvers['entry'] = ({ id }) => {
  return db.entry.findUnique({
    where: { id },
  })
}

export const createEntry: MutationResolvers['createEntry'] = ({ input }) => {
  return db.entry.create({
    data: input,
  })
}

export const updateEntry: MutationResolvers['updateEntry'] = ({
  id,
  input,
}) => {
  return db.entry.update({
    data: input,
    where: { id },
  })
}

export const deleteEntry: MutationResolvers['deleteEntry'] = ({ id }) => {
  return db.entry.delete({
    where: { id },
  })
}

export const Entry: EntryRelationResolvers = {
  match: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).match()
  },
  player: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).player()
  },
  team: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).team()
  },
  raid: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).raid()
  },
  dogIn: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).dogIn()
  },
  dogOut: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).dogOut()
  },
  catIn: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).catIn()
  },
  catOut: (_obj, { root }) => {
    return db.entry.findUnique({ where: { id: root?.id } }).catOut()
  },
}
