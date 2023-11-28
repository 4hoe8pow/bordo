/* eslint-disable @typescript-eslint/no-unused-vars */
import { Burger, NavLink } from '@mantine/core'
import {
  IconCalendarMonth,
  IconChartBar,
  IconHome2,
  IconNews,
  IconReportAnalytics,
  IconTable,
  IconUsers,
} from '@tabler/icons-react'

import { Link, routes } from '@redwoodjs/router'

import ThemeChange from 'src/components/ThemeChange/ThemeChange'

const NavHead = () => {
  return (
    <header className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link className="mr-5" to={routes.home()}>
          <img src="/bear.svg" alt="icon" width="32" height="32" />
        </Link>

        <nav className="flex flex-col flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto md:flex-row">
          <NavLink
            component={Link}
            to={routes.about()}
            label="About"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            className="w-fit hover:text-gray-900"
          />
          <NavLink
            component={Link}
            to={routes.news()}
            label="News"
            leftSection={<IconNews size="1rem" stroke={1.5} />}
            className="w-fit hover:text-gray-900"
          />
          <NavLink
            component={Link}
            to={routes.schedule()}
            label="Schedule"
            leftSection={<IconCalendarMonth size="1rem" stroke={1.5} />}
            className="w-fit hover:text-gray-900"
          />
          <NavLink
            component={Link}
            to={routes.teams()}
            label="Teams"
            leftSection={<IconUsers size="1rem" stroke={1.5} />}
            className="w-fit hover:text-gray-900"
          />
          <NavLink
            component={Link}
            to={routes.standings()}
            label="Standings"
            leftSection={<IconTable size="1rem" stroke={1.5} />}
            className="w-fit hover:text-gray-900"
          />
          <NavLink
            component={Link}
            to={routes.scores()}
            label="Scores"
            leftSection={<IconReportAnalytics size="1rem" stroke={1.5} />}
            className="w-fit hover:text-gray-900"
          />
          <NavLink
            component={Link}
            to={routes.stats()}
            label="Stats"
            leftSection={<IconChartBar size="1rem" stroke={1.5} />}
            className="w-fit hover:text-gray-900"
          />
        </nav>
        <ThemeChange />
      </div>
    </header>
  )
}

export default NavHead
