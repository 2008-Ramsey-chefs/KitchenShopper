import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {GuestCart} from './GuestCart'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('GuestCart', () => {
  let guestCart

  let propCart = {}
  beforeEach(() => {
    guestCart = shallow(<GuestCart cart={propCart} />)
  })

  it('renders the correct title in an h1', () => {
    expect(guestCart.find('h1').text()).to.be.equal('Guest Shopping Cart')
  })
})
