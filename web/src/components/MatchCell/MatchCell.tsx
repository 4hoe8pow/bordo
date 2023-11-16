import type { FindMatchQuery, FindMatchQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMatchQuery($id: Int!) {
    match: match(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindMatchQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  match,
}: CellSuccessProps<FindMatchQuery, FindMatchQueryVariables>) => {
  return <div>{JSON.stringify(match)}</div>
}
