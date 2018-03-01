import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromIpc } from 'store/selectors'
// import { resourceListReadRequest } from 'store/actions'

import { DossierForm } from 'components'

console.log(fromIpc)

class DossierFormContainer extends Component {
  static propTypes = {
    dossier: PropTypes.object.isRequired,
  }
  componentWillMount() {
  }

  handleSubmit() {
  }
  render() {
    const { dossier } = this.props
    console.log('dossier: ', dossier)
    return <DossierForm handleSubmit={this.handleSubmit} {...dossier} />
  }
}

const mapStateToProps = state => ({
  dossier: fromIpc.getDossier(state),
})

export default connect(mapStateToProps)(DossierFormContainer)
