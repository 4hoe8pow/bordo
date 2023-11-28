import { render } from '@redwoodjs/testing/web'

import ThemeChange from './ThemeChange'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThemeChange', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemeChange />)
    }).not.toThrow()
  })
})
