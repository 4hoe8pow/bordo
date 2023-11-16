import type { Raid } from '@prisma/client'

import { raids, raid, createRaid, updateRaid, deleteRaid } from './raids'
import type { StandardScenario } from './raids.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('raids', () => {
  scenario('returns all raids', async (scenario: StandardScenario) => {
    const result = await raids()

    expect(result.length).toEqual(Object.keys(scenario.raid).length)
  })

  scenario('returns a single raid', async (scenario: StandardScenario) => {
    const result = await raid({ id: scenario.raid.one.id })

    expect(result).toEqual(scenario.raid.one)
  })

  scenario('creates a raid', async (scenario: StandardScenario) => {
    const result = await createRaid({
      input: {
        raiderId: scenario.raid.two.raiderId,
        pointFor: 672941,
        pointAgainst: 3152938,
        doOrDieCount: 4822317,
        duration: 8379366,
        trickCode: scenario.raid.two.trickCode,
        opportunity: 8895317,
        isBonus: true,
      },
    })

    expect(result.raiderId).toEqual(scenario.raid.two.raiderId)
    expect(result.pointFor).toEqual(672941)
    expect(result.pointAgainst).toEqual(3152938)
    expect(result.doOrDieCount).toEqual(4822317)
    expect(result.duration).toEqual(8379366)
    expect(result.trickCode).toEqual(scenario.raid.two.trickCode)
    expect(result.opportunity).toEqual(8895317)
    expect(result.isBonus).toEqual(true)
  })

  scenario('updates a raid', async (scenario: StandardScenario) => {
    const original = (await raid({ id: scenario.raid.one.id })) as Raid
    const result = await updateRaid({
      id: original.id,
      input: { pointFor: 9014907 },
    })

    expect(result.pointFor).toEqual(9014907)
  })

  scenario('deletes a raid', async (scenario: StandardScenario) => {
    const original = (await deleteRaid({ id: scenario.raid.one.id })) as Raid
    const result = await raid({ id: original.id })

    expect(result).toEqual(null)
  })
})
