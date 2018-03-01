import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromIpc } from 'store/selectors'
// import { resourceListReadRequest } from 'store/actions'
import { Container } from 'reactstrap'

import { ClaimSets } from 'components'


console.log(fromIpc)

class ClaimSetsContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    limit: PropTypes.number,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
  }

  render() {
    const { list } = this.props
    return (
      <Container>
        <ClaimSets {...{ list }} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  list: fromIpc.getClaimset(state),
})

export default connect(mapStateToProps)(ClaimSetsContainer)
