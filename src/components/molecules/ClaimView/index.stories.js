import React from 'react'
import { storiesOf } from '@storybook/react'
import { ClaimView } from 'components'

storiesOf('ClaimView', module)
  .add('default', () => (
    <ClaimView title="Hello" body="Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua." />
  ))
