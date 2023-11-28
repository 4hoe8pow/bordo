import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeamsPage = () => {
  return (
    <>
      <MetaTags title="Teams" description="Teams page" />

      <h1>TeamsPage</h1>
      <p>
        Find me in <code>./web/src/pages/TeamsPage/TeamsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>teams</code>, link to me with `
        <Link to={routes.teams()}>Teams</Link>`
      </p>
    </>
  )
}

export default TeamsPage
