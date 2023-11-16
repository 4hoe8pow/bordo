import type { Championship } from '@prisma/client'

import {
  championships,
  championship,
  createChampionship,
  updateChampionship,
  deleteChampionship,
} from './championships'
import type { StandardScenario } from './championships.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('championships', () => {
  scenario('returns all championships', async (scenario: StandardScenario) => {
    const result = await championships()

    expect(result.length).toEqual(Object.keys(scenario.championship).length)
  })

  scenario(
    'returns a single championship',
    async (scenario: StandardScenario) => {
      const result = await championship({ id: scenario.championship.one.id })

      expect(result).toEqual(scenario.championship.one)
    }
  )

  scenario('creates a championship', async () => {
    const result = await createChampionship({
      input: { holdOn: '2023-11-15T15:00:43.419Z', title: 'String' },
    })

    expect(result.holdOn).toEqual(new Date('2023-11-15T15:00:43.419Z'))
    expect(result.title).toEqual('String')
  })

  scenario('updates a championship', async (scenario: StandardScenario) => {
    const original = (await championship({
      id: scenario.championship.one.id,
    })) as Championship
    const result = await updateChampionship({
      id: original.id,
      input: { holdOn: '2023-11-16T15:00:43.419Z' },
    })

    expect(result.holdOn).toEqual(new Date('2023-11-16T15:00:43.419Z'))
  })

  scenario('deletes a championship', async (scenario: StandardScenario) => {
    const original = (await deleteChampionship({
      id: scenario.championship.one.id,
    })) as Championship
    const result = await championship({ id: original.id })

    expect(result).toEqual(null)
  })
})
