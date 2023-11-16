import type { Prisma, Entry } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EntryCreateArgs>({
  entry: {
    one: {
      data: {
        uniformNumber: 1179726,
        match: {
          create: {
            championship: {
              create: {
                holdOn: '2023-11-11T02:09:44.958Z',
                title: 'String',
                sex: 'String',
              },
            },
            dog: { create: { name: 'String' } },
            cat: { create: { name: 'String' } },
          },
        },
        player: {
          create: {
            name: 'String',
            sex: 'String',
            height: 6642934,
            weight: 1145704,
          },
        },
        team: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        uniformNumber: 2197088,
        match: {
          create: {
            championship: {
              create: {
                holdOn: '2023-11-11T02:09:44.958Z',
                title: 'String',
                sex: 'String',
              },
            },
            dog: { create: { name: 'String' } },
            cat: { create: { name: 'String' } },
          },
        },
        player: {
          create: {
            name: 'String',
            sex: 'String',
            height: 8140398,
            weight: 884305,
          },
        },
        team: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Entry, 'entry'>
