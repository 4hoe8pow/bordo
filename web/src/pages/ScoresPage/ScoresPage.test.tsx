import { render } from '@redwoodjs/testing/web'

import ScoresPage from './ScoresPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ScoresPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScoresPage />)
    }).not.toThrow()
  })
})
