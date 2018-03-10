import React from 'react'
import PropTypes from 'prop-types'

import { Nav, NavLink, NavItem, Container } from 'reactstrap'

import { NavLink as RRNavLink } from 'react-router-dom';


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
          <NavLink to="/application/:app/claims/text" activeClassName="active" tag={RRNavLink}>Text</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/application/:app/claims/tree" activeClassName="active" tag={RRNavLink}>Tree</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/application/:app/claims/compare" activeClassName="active" tag={RRNavLink}>Compare</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/application/:app/claims/amend" activeClassName="active" tag={RRNavLink}>Amendments</NavLink>
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
