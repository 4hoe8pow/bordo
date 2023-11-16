import type { FindChampionships } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { truncate } from 'src/lib/formatters'

const ChampionshipsList = ({ championships }: FindChampionships) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <tbody>
          {championships.map((championship) => (
            <tr key={championship.id}>
              <td>
                <Link
                  to={routes.matches({ id: championship.id })}
                  title={'Show championship ' + championship.id + ' detail'}
                >
                  {truncate(championship.title)}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ChampionshipsList
