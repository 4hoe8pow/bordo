import type { FindMatchById } from 'types/graphql'

import {} from 'src/lib/formatters'

interface Props {
  match: NonNullable<FindMatchById['match']>
}

const Match = ({ match }: Props) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Match {match.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{match.id}</td>
            </tr>
            <tr>
              <th>Sex</th>
              <td>{match.sex}</td>
            </tr>
            <tr>
              <th>Championship id</th>
              <td>{match.championshipId}</td>
            </tr>
            <tr>
              <th>Oak id</th>
              <td>{match.oakId}</td>
            </tr>
            <tr>
              <th>Oak score</th>
              <td>{match.oakScore}</td>
            </tr>
            <tr>
              <th>Willow id</th>
              <td>{match.willowId}</td>
            </tr>
            <tr>
              <th>Willow score</th>
              <td>{match.willowScore}</td>
            </tr>
            <tr>
              <th>Next match id</th>
              <td>{match.nextMatchId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Match
