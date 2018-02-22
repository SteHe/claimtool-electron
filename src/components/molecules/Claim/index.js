import React from 'react'
import PropTypes from 'prop-types'

import { TableRow, TableCell, Button } from 'components'

const Claim = ({ number, phase, ver, ver_date, claims, ...props }) => {
  return (
    <TableRow {...props}>
      <TableCell><Button>go</Button></TableCell>
      <TableCell>{ver}</TableCell>
      <TableCell>{number}</TableCell>
      <TableCell>{phase}</TableCell>
      <TableCell>{ver_date}</TableCell>
      <TableCell>{claims.claim.length}</TableCell>
      <TableCell><Button>edit</Button></TableCell>
      <TableCell><Button>del</Button></TableCell>
    </TableRow>
  )
}

Claim.propTypes = {
  number: PropTypes.string.isRequired,
  phase: PropTypes.string,
  ver: PropTypes.string.isRequired,
  ver_date: PropTypes.string,
}

export default Claim
