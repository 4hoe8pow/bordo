import type { Match } from '@prisma/client'

import {
  matches,
  match,
  createMatch,
  updateMatch,
  deleteMatch,
} from './matches'
import type { StandardScenario } from './matches.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('matches', () => {
  scenario('returns all matches', async (scenario: StandardScenario) => {
    const result = await matches()

    expect(result.length).toEqual(Object.keys(scenario.match).length)
  })

  scenario('returns a single match', async (scenario: StandardScenario) => {
    const result = await match({ id: scenario.match.one.id })

    expect(result).toEqual(scenario.match.one)
  })

  scenario('creates a match', async (scenario: StandardScenario) => {
    const result = await createMatch({
      input: {
        sex: 'String',
        championshipId: scenario.match.two.championshipId,
        oakId: scenario.match.two.oakId,
        oakScore: 3875416,
        willowId: scenario.match.two.willowId,
        willowScore: 9053363,
      },
    })

    expect(result.sex).toEqual('String')
    expect(result.championshipId).toEqual(scenario.match.two.championshipId)
    expect(result.oakId).toEqual(scenario.match.two.oakId)
    expect(result.oakScore).toEqual(3875416)
    expect(result.willowId).toEqual(scenario.match.two.willowId)
    expect(result.willowScore).toEqual(9053363)
  })

  scenario('updates a match', async (scenario: StandardScenario) => {
    const original = (await match({ id: scenario.match.one.id })) as Match
    const result = await updateMatch({
      id: original.id,
      input: { sex: 'String2' },
    })

    expect(result.sex).toEqual('String2')
  })

  scenario('deletes a match', async (scenario: StandardScenario) => {
    const original = (await deleteMatch({ id: scenario.match.one.id })) as Match
    const result = await match({ id: original.id })

    expect(result).toEqual(null)
  })
})
