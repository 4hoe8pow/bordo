import { MetaTags } from '@redwoodjs/web'

import ChampionshipsCell from 'src/components/Championship/ChampionshipsCell'

const ScoresPage = () => {
  return (
    <>
      <MetaTags title="Scores" description="Scores page" />

      <ChampionshipsCell />
    </>
  )
}

export default ScoresPage
