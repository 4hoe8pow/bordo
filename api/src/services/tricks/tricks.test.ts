import type { Trick } from '@prisma/client'

import { tricks, trick, createTrick, updateTrick, deleteTrick } from './tricks'
import type { StandardScenario } from './tricks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tricks', () => {
  scenario('returns all tricks', async (scenario: StandardScenario) => {
    const result = await tricks()

    expect(result.length).toEqual(Object.keys(scenario.trick).length)
  })

  scenario('returns a single trick', async (scenario: StandardScenario) => {
    const result = await trick({ id: scenario.trick.one.id })

    expect(result).toEqual(scenario.trick.one)
  })

  scenario('creates a trick', async () => {
    const result = await createTrick({
      input: { code: 'String542420', name: 'String', raidSuccess: true },
    })

    expect(result.code).toEqual('String542420')
    expect(result.name).toEqual('String')
    expect(result.raidSuccess).toEqual(true)
  })

  scenario('updates a trick', async (scenario: StandardScenario) => {
    const original = (await trick({ id: scenario.trick.one.id })) as Trick
    const result = await updateTrick({
      id: original.id,
      input: { code: 'String95407742' },
    })

    expect(result.code).toEqual('String95407742')
  })

  scenario('deletes a trick', async (scenario: StandardScenario) => {
    const original = (await deleteTrick({ id: scenario.trick.one.id })) as Trick
    const result = await trick({ id: original.id })

    expect(result).toEqual(null)
  })
})
