import React from 'react'
import { storiesOf } from '@storybook/react'
import { ClaimSet } from 'components'

storiesOf('ClaimSet', module)
  .add('default', () => (
    <ClaimSet title="Hello" body="Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua." />
  ))
