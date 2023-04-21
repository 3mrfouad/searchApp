import React, { useContext, useEffect, useState } from 'react'

import SearchContext from './SearchContext'
import useFetch from '../../hooks/useFetch'

const SearchProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('')
  const [results, setResults] = useState([])
  const resource = 'https://jsonplaceholder.typicode.com/users'
  const options = {}
  const { data, error, loading } = useFetch(resource, options)
  useEffect(() => {
    if (userInput) {
      const searchResults = data.filter(user =>
        user.name.toLowerCase().includes(userInput.toLocaleLowerCase())
      )
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [userInput])

  const value = {
    userInput,
    setUserInput,
    results,
    setResults,
    error,
    loading
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export default SearchProvider
