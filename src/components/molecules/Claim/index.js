import React from 'react'
import PropTypes from 'prop-types'

// import { Button } from 'reactstrap'

const Claim = (claim) => {
  console.log(claim)
  const { features, clnum } = claim
  let { feature } = features
  console.log(feature)
  if (!Array.isArray(feature)) {
    feature = [feature]
  }
  return (
    <div>
      <p>{clnum}. {feature.map(ft => <span key={ft.desc}>{ft.desc}#<br /></span>)}</p>
    </div>
  )
}

Claim.propTypes = {
  claim: PropTypes.objectOf(PropTypes.array),
}

export default Claim

// {features.feature.map(ft => <p>{ft}</p>)}
