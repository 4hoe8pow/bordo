import type { Prisma, Player } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PlayerCreateArgs>({
  player: {
    one: {
      data: { name: 'String', sex: 'String', height: 5365567, weight: 3380416 },
    },
    two: {
      data: { name: 'String', sex: 'String', height: 8519749, weight: 2075489 },
    },
  },
})

export type StandardScenario = ScenarioData<Player, 'player'>
