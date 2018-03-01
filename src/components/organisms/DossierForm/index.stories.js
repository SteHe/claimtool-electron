import React from 'react'
import { storiesOf } from '@storybook/react'
import { DossierForm } from 'containers'

storiesOf('DossierForm', module)
  .add('default', () => (
    <DossierForm />
  ))
