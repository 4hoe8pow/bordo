import type { FindMatches } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Matches from 'src/components/Match/Matches'

import { receive_championship_input_from_ts } from '../../../../lib/aogiri/pkg/aogiri'

export const QUERY = gql`
  query FindMatches($championshipId: Int!) {
    matchesByChampionship(championshipId: $championshipId) {
      id
      sex
      championshipId
      oakId
      oakScore
      willowId
      willowScore
      nextMatchId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No matches yet. '}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  matchesByChampionship,
}: CellSuccessProps<FindMatches>) => {
  receive_championship_input_from_ts(matchesByChampionship)
  return <Matches matchesByChampionship={matchesByChampionship} />
}
