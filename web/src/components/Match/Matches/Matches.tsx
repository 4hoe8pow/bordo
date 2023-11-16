import type { FindMatches } from 'types/graphql'

import { truncate } from 'src/lib/formatters'

const MatchesList = ({ matchesByChampionship }: FindMatches) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Sex</th>
            <th>Championship id</th>
            <th>Oak id</th>
            <th>Oak score</th>
            <th>Willow id</th>
            <th>Willow score</th>
            <th>Next match id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {matchesByChampionship.map((match) => (
            <tr key={match.id}>
              <td>{truncate(match.id)}</td>
              <td>{truncate(match.sex)}</td>
              <td>{truncate(match.championshipId)}</td>
              <td>{truncate(match.oakId)}</td>
              <td>{truncate(match.oakScore)}</td>
              <td>{truncate(match.willowId)}</td>
              <td>{truncate(match.willowScore)}</td>
              <td>{truncate(match.nextMatchId)}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MatchesList
