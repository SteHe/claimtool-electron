import React from 'react'
import PropTypes from 'prop-types'

import { Claim, Table } from 'components'


const ClaimList = ({
  list, ...props
}) => {
  if (list.length) {
    console.log(list[0])
  }
  return (
    <Table {...props}>
      {!list.length && <div>Loading</div>}
      {list.map(set => <Claim key={set.ver} {...set} />)}
    </Table>
  )
}

ClaimList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ClaimList
