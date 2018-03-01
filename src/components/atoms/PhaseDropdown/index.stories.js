import React from 'react'
import { storiesOf } from '@storybook/react'
import PhaseDropdown from '.'

storiesOf('PhaseDropdown', module)
  .add('default', () => (
    <PhaseDropdown>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</PhaseDropdown>
  ))
  .add('reverse', () => (
    <PhaseDropdown reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</PhaseDropdown>
  ))
  .add('palette', () => (
    <PhaseDropdown palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</PhaseDropdown>
  ))
  .add('palette reverse', () => (
    <PhaseDropdown palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </PhaseDropdown>
  ))
  .add('palette opaque', () => (
    <PhaseDropdown palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </PhaseDropdown>
  ))
  .add('palette opaque reverse', () => (
    <PhaseDropdown palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </PhaseDropdown>
  ))
