import type { Prisma, Match } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MatchCreateArgs>({
  match: {
    one: {
      data: {
        sex: 'String',
        oakScore: 5914270,
        willowScore: 5105622,
        championship: {
          create: { holdOn: '2023-11-15T15:05:00.637Z', title: 'String' },
        },
        oak: { create: { name: 'String' } },
        willow: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        sex: 'String',
        oakScore: 3760828,
        willowScore: 997865,
        championship: {
          create: { holdOn: '2023-11-15T15:05:00.637Z', title: 'String' },
        },
        oak: { create: { name: 'String' } },
        willow: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Match, 'match'>
