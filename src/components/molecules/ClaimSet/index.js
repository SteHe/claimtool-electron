import React from 'react'
import PropTypes from 'prop-types'

import { Button, NavLink, NavItem } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom';

const ClaimSet = ({
  number,
  phase,
  ver,
  ver_date,
  claims,
  ...props
}) => {
  return (
    <tr {...props}>
      <td>
        <NavLink to={`/application/:app/claims/${ver}`} activeClassName="active" tag={RRNavLink}>{ver}</NavLink>
      </td>
      <td>{number}</td>
      <td>{phase}</td>
      <td>{ver_date}</td>
      <td>{claims.claim.length}</td>
      <td><Button color="primary" size="sm">edit</Button></td>
      <td><Button color="primary" size="sm">del</Button></td>
    </tr>
  )
}

ClaimSet.propTypes = {
  number: PropTypes.string.isRequired,
  phase: PropTypes.string,
  ver: PropTypes.string.isRequired,
  ver_date: PropTypes.string,
  claims: PropTypes.objectOf(PropTypes.array),
}

export default ClaimSet
