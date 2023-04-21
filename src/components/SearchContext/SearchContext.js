import React, { createContext } from 'react'

const initialValue = {
  userInput: '',
  setUserInput: () => {},
  results: [],
  setResults: () => {}
}
const SearchContext = createContext(initialValue)

export default SearchContext
