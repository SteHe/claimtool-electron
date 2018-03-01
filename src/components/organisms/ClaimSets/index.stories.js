import React from 'react'
import { storiesOf } from '@storybook/react'
import { ClaimSets } from 'components'

const list = [
  { id: 0, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 1, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 2, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 3, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
]

storiesOf('ClaimSets', module)
  .add('default', () => (
    <ClaimSets list={list} />
  ))
  .add('loading', () => (
    <ClaimSets list={[]} loading />
  ))
