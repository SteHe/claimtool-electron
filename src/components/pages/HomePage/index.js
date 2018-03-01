// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header } from 'components'
import { ClaimSets, DossierForm, ClaimView } from 'containers'

const HomePage = () => {
  return (
    <div>
      <Header />
      <DossierForm />
      <ClaimSets limit={20} />
      <ClaimView />
    </div>
  )
}

export default HomePage
