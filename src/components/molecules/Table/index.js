import React from 'react'
import PropTypes from 'prop-types'

import { Caption } from 'components'

const Table = ({
  caption, head, foot, children, ...props
}) => {
  return (
    <table className="table table-bordered" {...props}>
      {caption && <Caption>{caption}</Caption>}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </table>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  head: PropTypes.node,
  foot: PropTypes.node,
  children: PropTypes.any,
  reverse: PropTypes.bool,
}

export default Table
