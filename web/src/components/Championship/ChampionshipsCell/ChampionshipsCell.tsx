import type { FindChampionships } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Championships from 'src/components/Championship/Championships'

export const QUERY = gql`
  query FindChampionships {
    championships {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No championships yet. '}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  championships,
}: CellSuccessProps<FindChampionships>) => {
  return <Championships championships={championships} />
}
