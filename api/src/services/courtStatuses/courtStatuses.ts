import type {
  QueryResolvers,
  MutationResolvers,
  CourtStatusRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const courtStatuses: QueryResolvers['courtStatuses'] = () => {
  return db.courtStatus.findMany()
}

export const courtStatus: QueryResolvers['courtStatus'] = ({ id }) => {
  return db.courtStatus.findUnique({
    where: { id },
  })
}

export const createCourtStatus: MutationResolvers['createCourtStatus'] = ({
  input,
}) => {
  return db.courtStatus.create({
    data: input,
  })
}

export const updateCourtStatus: MutationResolvers['updateCourtStatus'] = ({
  id,
  input,
}) => {
  return db.courtStatus.update({
    data: input,
    where: { id },
  })
}

export const deleteCourtStatus: MutationResolvers['deleteCourtStatus'] = ({
  id,
}) => {
  return db.courtStatus.delete({
    where: { id },
  })
}

export const CourtStatus: CourtStatusRelationResolvers = {
  raid: (_obj, { root }) => {
    return db.courtStatus.findUnique({ where: { id: root?.id } }).raid()
  },
  dogIn: (_obj, { root }) => {
    return db.courtStatus.findUnique({ where: { id: root?.id } }).dogIn()
  },
  dogOut: (_obj, { root }) => {
    return db.courtStatus.findUnique({ where: { id: root?.id } }).dogOut()
  },
  catIn: (_obj, { root }) => {
    return db.courtStatus.findUnique({ where: { id: root?.id } }).catIn()
  },
  catOut: (_obj, { root }) => {
    return db.courtStatus.findUnique({ where: { id: root?.id } }).catOut()
  },
}
