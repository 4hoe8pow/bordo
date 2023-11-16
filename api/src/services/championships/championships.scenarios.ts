import type { Prisma, Championship } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ChampionshipCreateArgs>({
  championship: {
    one: { data: { holdOn: '2023-11-15T15:00:43.451Z', title: 'String' } },
    two: { data: { holdOn: '2023-11-15T15:00:43.451Z', title: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Championship, 'championship'>
