import type { Prisma, Trick } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TrickCreateArgs>({
  trick: {
    one: { data: { code: 'String6359386', name: 'String', raidSuccess: true } },
    two: { data: { code: 'String6575904', name: 'String', raidSuccess: true } },
  },
})

export type StandardScenario = ScenarioData<Trick, 'trick'>
