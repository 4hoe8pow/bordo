import type { Prisma, CourtStatus } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CourtStatusCreateArgs>({
  courtStatus: {
    one: {
      data: {
        raid: {
          create: {
            pointFor: 4301604,
            pointAgainst: 5133394,
            doOrDieCount: 1510325,
            duration: 7892639,
            opportunity: 9688206,
            isBonus: true,
            raider: {
              create: {
                uniformNumber: 4801801,
                match: {
                  create: {
                    championship: {
                      create: {
                        holdOn: '2023-11-11T02:10:34.556Z',
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
                    height: 9886903,
                    weight: 739792,
                  },
                },
                team: { create: { name: 'String' } },
              },
            },
            trick: {
              create: {
                code: 'String4542983',
                name: 'String',
                raidSuccess: true,
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        raid: {
          create: {
            pointFor: 1809286,
            pointAgainst: 7996530,
            doOrDieCount: 6442736,
            duration: 3636988,
            opportunity: 1886028,
            isBonus: true,
            raider: {
              create: {
                uniformNumber: 7038179,
                match: {
                  create: {
                    championship: {
                      create: {
                        holdOn: '2023-11-11T02:10:34.556Z',
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
                    height: 6700299,
                    weight: 6966960,
                  },
                },
                team: { create: { name: 'String' } },
              },
            },
            trick: {
              create: {
                code: 'String7038600',
                name: 'String',
                raidSuccess: true,
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CourtStatus, 'courtStatus'>
