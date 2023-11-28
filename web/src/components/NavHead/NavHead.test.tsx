import { render } from '@redwoodjs/testing/web'

import NavHead from './NavHead'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavHead', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavHead />)
    }).not.toThrow()
  })
})
