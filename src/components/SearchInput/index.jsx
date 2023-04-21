import React, { useContext } from 'react'

import SearchContext from '../SearchContext/SearchContext'

function SearchInput() {
  const { userInput, setUserInput } = useContext(SearchContext)

  const handleOnChange = event => {
    setUserInput(event.target.value)
  }
  return (
    <form>
      <label htmlFor="search-input">Search: </label>
      <input id="search-input" value={userInput} onChange={handleOnChange} />
    </form>
  )
}

export default SearchInput
