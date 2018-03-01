import React from 'react'
import PropTypes from 'prop-types'

import { Nav, NavLink, NavItem, Container } from 'reactstrap'

import { Claim } from 'components'

const ClaimView = (props) => {
  const { claims } = props
  console.log(claims)
  const { claim } = claims
  console.log(claim)
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#">Text</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Tree</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Compare</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Amendments</NavLink>
        </NavItem>
      </Nav>
      <Container>
        claims
        {claim.map(clm => (
          <Claim key={clm.clnum} {...clm} />
        ))}
      </Container>
    </div>
  )
}

/*
 {claims.map(claim => <div key={claim.number}> {...claim}</div>)}
*/


ClaimView.propTypes = {
  claims: PropTypes.objectOf(PropTypes.array),
}

export default ClaimView
