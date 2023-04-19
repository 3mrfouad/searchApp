import React from 'react'
import SearchItem from '../SearchItem'

function SearchResults({ results }) {
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
