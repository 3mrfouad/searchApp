import './App.css'

import React, { useContext } from 'react'

import Alert from './components/Alert'
import SearchContext from './components/SearchContext/SearchContext'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'

function App() {
  const { results, error, loading } = useContext(SearchContext)

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <>
      <SearchInput />
      {!!!results.length && <Alert />}
      <SearchResults />
    </>
  )
}

export default App
