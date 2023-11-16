import type { Entry } from '@prisma/client'

import {
  entries,
  entry,
  createEntry,
  updateEntry,
  deleteEntry,
} from './entries'
import type { StandardScenario } from './entries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('entries', () => {
  scenario('returns all entries', async (scenario: StandardScenario) => {
    const result = await entries()

    expect(result.length).toEqual(Object.keys(scenario.entry).length)
  })

  scenario('returns a single entry', async (scenario: StandardScenario) => {
    const result = await entry({ id: scenario.entry.one.id })

    expect(result).toEqual(scenario.entry.one)
  })

  scenario('creates a entry', async (scenario: StandardScenario) => {
    const result = await createEntry({
      input: {
        matchId: scenario.entry.two.matchId,
        uniformNumber: 2069353,
        playerId: scenario.entry.two.playerId,
        teamId: scenario.entry.two.teamId,
      },
    })

    expect(result.matchId).toEqual(scenario.entry.two.matchId)
    expect(result.uniformNumber).toEqual(2069353)
    expect(result.playerId).toEqual(scenario.entry.two.playerId)
    expect(result.teamId).toEqual(scenario.entry.two.teamId)
  })

  scenario('updates a entry', async (scenario: StandardScenario) => {
    const original = (await entry({ id: scenario.entry.one.id })) as Entry
    const result = await updateEntry({
      id: original.id,
      input: { uniformNumber: 5020138 },
    })

    expect(result.uniformNumber).toEqual(5020138)
  })

  scenario('deletes a entry', async (scenario: StandardScenario) => {
    const original = (await deleteEntry({ id: scenario.entry.one.id })) as Entry
    const result = await entry({ id: original.id })

    expect(result).toEqual(null)
  })
})
