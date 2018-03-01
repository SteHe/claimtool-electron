import React from 'react'
import { storiesOf } from '@storybook/react'
import { ClaimsPage } from 'components'

storiesOf('ClaimsPage', module)
  .add('default', () => (
    <ClaimsPage />
  ))
