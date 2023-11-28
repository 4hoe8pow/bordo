import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StandingsPage = () => {
  return (
    <>
      <MetaTags title="Standings" description="Standings page" />

      <h1>StandingsPage</h1>
      <p>
        Find me in <code>./web/src/pages/StandingsPage/StandingsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>standings</code>, link to me with `
        <Link to={routes.standings()}>Standings</Link>`
      </p>
    </>
  )
}

export default StandingsPage
