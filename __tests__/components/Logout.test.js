import React from 'react'
import { shallow } from 'enzyme'

import Logout from '../../app/containers/App/Sidebar/Logout/Logout'

describe('Logout', () => {
  const logout = jest.fn()

  const promptHasBeenDisplayed = jest.fn()

  test('should render without crashing', () => {
    const wrapper = shallow(<Logout logout={logout} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should dispatch logout action when clicked', () => {
    const wrapper = shallow(
      <Logout
        id="logout"
        logout={logout}
        promptHasBeenDisplayed={promptHasBeenDisplayed}
      />,
    )
    expect(logout.mock.calls.length).toEqual(0)
    wrapper.find('#logout').simulate('click')
    expect(logout.mock.calls.length).toEqual(1)
  })
})
