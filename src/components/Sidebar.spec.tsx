import { RouterContext } from 'next/dist/shared/lib/router-context'
import { Sidebar } from 'components/Sidebar'
import { createMockrouter } from 'test-utils/create-mock-router'
import { render } from '@testing-library/react'

describe('Sidebar', () => {
  it('should render the sidebar', () => {
    const { asFragment } = render(
      <RouterContext.Provider
        value={createMockrouter({
          asPath: '/test-path',
        })}
      >
        <Sidebar />
      </RouterContext.Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
