// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/stats" page={StatsPage} name="stats" />
        <Route path="/scores" page={ScoresPage} name="scores" />
        <Route path="/standings" page={StandingsPage} name="standings" />
        <Route path="/teams" page={TeamsPage} name="teams" />
        <Route path="/schedule" page={SchedulePage} name="schedule" />
        <Route path="/news" page={NewsPage} name="news" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/scores/championships/{id:Int}" page={MatchMatchesPage} name="matches" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
