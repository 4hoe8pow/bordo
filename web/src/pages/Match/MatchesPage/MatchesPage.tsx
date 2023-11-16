import MatchesCell from 'src/components/Match/MatchesCell'

type MatchesPageProps = {
  id: number
}

const MatchesPage = ({ id }: MatchesPageProps) => {
  return <MatchesCell championshipId={id} />
}

export default MatchesPage
