import React from 'react'
import PropTypes from 'prop-types'

import { ClaimSet, Table } from 'components'


const ClaimSets = ({
  list, ...props
}) => {
  if (list.length) {
    console.log(list[0])
  }
  return (
    <div>
      {!list.length && <div>Loading</div>}
      <Table {...props}>
        {list.map(set => <ClaimSet key={set.ver} {...set} />)}
      </Table>
    </div>
  )
}

ClaimSets.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ClaimSets
