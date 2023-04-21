import './index.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchProvider from './components/SearchContext/SearchProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
)
