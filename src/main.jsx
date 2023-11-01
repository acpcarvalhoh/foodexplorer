import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"
import theme from './styles/theme'
import { Routes } from './routes'
import { AuthProvider } from "./hooks/auth"
import { SearchProvider } from "./hooks/useSearch"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <SearchProvider>
          <Routes/>
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
