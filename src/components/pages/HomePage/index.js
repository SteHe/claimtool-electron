// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header } from 'components'
import { Footer, ClaimSets, DossierForm } from 'containers'

const HomePage = () => {
  return (
    <div>
      <Header />
      <DossierForm />
      <ClaimSets />
    </div>
  )
}

export default HomePage
