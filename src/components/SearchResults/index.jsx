import React, { useContext } from 'react'

import SearchContext from '../SearchContext/SearchContext'
import SearchItem from '../SearchItem'

function SearchResults() {
  const { results } = useContext(SearchContext)
  if (!Array.isArray(results)) return null
  return (
    <ul>
      {results.map(item => (
        <SearchItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default SearchResults
