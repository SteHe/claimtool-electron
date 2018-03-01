import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromIpc } from 'store/selectors'
// import { resourceListReadRequest } from 'store/actions'
import { ClaimView } from 'components'


console.log(fromIpc)

class ClaimViewContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    version: PropTypes.number,
  }

  componentWillMount() {
  }

  render() {
    const { list, version } = this.props
    console.log(list[0])
    let retvalue = ''
    if (list.length && (list[version] !== undefined)) {
      const claimset = list[version]
      retvalue = (
        <ClaimView {...claimset} />
      )
    }
    return retvalue
  }
}

const mapStateToProps = state => ({
  version: 0,
  list: fromIpc.getClaimset(state),
})

export default connect(mapStateToProps)(ClaimViewContainer)
