import React from 'react'
import { storiesOf } from '@storybook/react'
import { Claim } from 'components'

storiesOf('Claim', module)
  .add('default', () => (
    <Claim title="Hello" body="Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua." />
  ))
