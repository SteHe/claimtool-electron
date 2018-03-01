import React from 'react'

// import { IconLink, PrimaryNavigation, Block } from 'components'
// import { UserButton } from 'containers'
import { Navbar, Nav, NavLink, NavItem, NavbarBrand } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <Navbar>
        <NavbarBrand to="/" activeClassName="active" tag={RRNavLink}>Claimtool</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink to="/1" activeClassName="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/application/:app/claims/" activeClassName="active" tag={RRNavLink}>Claims</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
