import type { CourtStatus } from '@prisma/client'

import {
  courtStatuses,
  courtStatus,
  createCourtStatus,
  updateCourtStatus,
  deleteCourtStatus,
} from './courtStatuses'
import type { StandardScenario } from './courtStatuses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('courtStatuses', () => {
  scenario('returns all courtStatuses', async (scenario: StandardScenario) => {
    const result = await courtStatuses()

    expect(result.length).toEqual(Object.keys(scenario.courtStatus).length)
  })

  scenario(
    'returns a single courtStatus',
    async (scenario: StandardScenario) => {
      const result = await courtStatus({ id: scenario.courtStatus.one.id })

      expect(result).toEqual(scenario.courtStatus.one)
    }
  )

  scenario('creates a courtStatus', async (scenario: StandardScenario) => {
    const result = await createCourtStatus({
      input: { raidId: scenario.courtStatus.two.raidId },
    })

    expect(result.raidId).toEqual(scenario.courtStatus.two.raidId)
  })

  scenario('updates a courtStatus', async (scenario: StandardScenario) => {
    const original = (await courtStatus({
      id: scenario.courtStatus.one.id,
    })) as CourtStatus
    const result = await updateCourtStatus({
      id: original.id,
      input: { raidId: scenario.courtStatus.two.raidId },
    })

    expect(result.raidId).toEqual(scenario.courtStatus.two.raidId)
  })

  scenario('deletes a courtStatus', async (scenario: StandardScenario) => {
    const original = (await deleteCourtStatus({
      id: scenario.courtStatus.one.id,
    })) as CourtStatus
    const result = await courtStatus({ id: original.id })

    expect(result).toEqual(null)
  })
})
