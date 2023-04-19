import React, { useState } from 'react'

function SearchInput({ userInput, setUserInput }) {
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
