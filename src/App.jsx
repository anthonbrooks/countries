import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <label htmlFor='search'>
        find countries <input type='text' id='search' />
      </label>
      <ul>
        {countries.map(country => <li key={country.name.common}>{country.name.common} {country.flag}</li>)}
      </ul>
    </>
  )
}

export default App
