import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, ClaimsPage } from 'components'
import { Logger, Footer } from 'containers'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/application/:app/claims/" component={ClaimsPage} />
        </Switch>
      </ThemeProvider>
      <Footer />
      <Logger />
    </div>
  )
}

export default App
