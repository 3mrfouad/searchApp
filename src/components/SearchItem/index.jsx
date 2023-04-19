import React from 'react'

function SearchItem({ item }) {
  return (
    <li>
      <p>
        {item.first_name} {item.last_name}
      </p>
    </li>
  )
}

export default SearchItem
