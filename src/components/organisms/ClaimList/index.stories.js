import React from 'react'
import { storiesOf } from '@storybook/react'
import { ClaimList } from 'components'

const list = [
  { id: 0, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 1, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 2, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 3, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
]

storiesOf('ClaimList', module)
  .add('default', () => (
    <ClaimList list={list} />
  ))
  .add('loading', () => (
    <ClaimList list={[]} loading />
  ))
