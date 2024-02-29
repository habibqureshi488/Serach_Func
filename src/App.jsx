import React from 'react'
import { useState } from 'react'
import SearchBar from './Components/SearchBar'
import SearchResultList from './Components/SearchResultList'

function App() {
const [results , setResult] = useState([])
  return (
    <div>
      <SearchBar setResult={setResult} />
      <SearchResultList results={results} />
    </div>
  )
}

export default App