import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewsPage = () => {
  return (
    <>
      <MetaTags title="News" description="News page" />

      <h1>NewsPage</h1>
      <p>
        Find me in <code>./web/src/pages/NewsPage/NewsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>news</code>, link to me with `
        <Link to={routes.news()}>News</Link>`
      </p>
    </>
  )
}

export default NewsPage
