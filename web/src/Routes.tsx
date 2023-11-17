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
        <Route path="/championships" page={ChampionshipChampionshipsPage} name="championships" />
        <Route path="/championships/{id:Int}" page={MatchMatchesPage} name="matches" prerender />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
