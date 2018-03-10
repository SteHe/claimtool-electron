import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromIpc } from 'store/selectors'
// import { resourceListReadRequest } from 'store/actions'
import { ClaimView } from 'components'


console.log(fromIpc)

class ClaimViewContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    version: PropTypes.number,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentWillMount() {
  }

  render() {
    const { list, match } = this.props
    const { params } = match
    const { ver } = params
    const listNum = parseInt(ver, 10) - 1
    console.log(list[listNum], this.props.location, ver)
    let retvalue = ''
    // assure that listNum is within list length
    if (list.length > listNum && (list[listNum] !== undefined)) {
      const claimset = list[listNum]
      retvalue = (
        <ClaimView {...claimset} />
      )
    }
    return retvalue
  }
}

const mapStateToProps = (state) => ({
  version: 0,
  list: fromIpc.getClaimset(state),
})

export default connect(mapStateToProps)(withRouter(ClaimViewContainer))
