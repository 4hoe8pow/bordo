import type { Prisma, Raid } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RaidCreateArgs>({
  raid: {
    one: {
      data: {
        pointFor: 7981175,
        pointAgainst: 4183658,
        doOrDieCount: 1680502,
        duration: 9216398,
        opportunity: 8843346,
        isBonus: true,
        raider: {
          create: {
            uniformNumber: 8129732,
            match: {
              create: {
                championship: {
                  create: {
                    holdOn: '2023-11-11T02:10:16.146Z',
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
                height: 2978401,
                weight: 8314327,
              },
            },
            team: { create: { name: 'String' } },
          },
        },
        trick: {
          create: { code: 'String4186772', name: 'String', raidSuccess: true },
        },
      },
    },
    two: {
      data: {
        pointFor: 9874963,
        pointAgainst: 6183710,
        doOrDieCount: 3999600,
        duration: 5079195,
        opportunity: 5402457,
        isBonus: true,
        raider: {
          create: {
            uniformNumber: 2541981,
            match: {
              create: {
                championship: {
                  create: {
                    holdOn: '2023-11-11T02:10:16.146Z',
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
                height: 8286001,
                weight: 7384845,
              },
            },
            team: { create: { name: 'String' } },
          },
        },
        trick: {
          create: { code: 'String5021805', name: 'String', raidSuccess: true },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Raid, 'raid'>
