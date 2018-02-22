// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { ClaimList } from 'containers'

const HomePage = () => {
  return (
    <div>
      <ClaimList limit={20} />
    </div>
  )
}

export default HomePage
