import React from 'react'
import ReactDOM from 'react-dom/client'
import { NewDish } from './pages/NewDish'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <NewDish/>
    </ThemeProvider>
   
  </React.StrictMode>,
)
