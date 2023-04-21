import React, { useState } from 'react'

import SearchContext from './SearchContext'

const SearchProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('')
  const [results, setResults] = useState([])

  const value = {
    userInput,
    setUserInput,
    results,
    setResults
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export default SearchProvider
