import './App.css'

import React, { useContext, useEffect, useState } from 'react'

import Alert from './components/Alert'
import SearchContext from './components/SearchContext/SearchContext'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'

function App() {
  const { userInput, results, setResults } = useContext(SearchContext)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setData(json)
        setError(null)
        setLoading(false)
      })
      .catch(err => {
        setError('[App Error]', err)
        setData([])
        setLoading(false)
      })
  }, [])

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
