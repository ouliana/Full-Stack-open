import { useState, useEffect } from 'react';
import countriesService from './service/countries';
import View from './components/View';

function App() {
  const [search, setSearch] = useState('');
  const [countries, SetCountries] = useState([]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const showDetails = name => {
    setSearch(name);
  };

  useEffect(() => {
    if (!search) return;

    countriesService.getCountries(search).then(returnedCountries => {
      SetCountries(returnedCountries);
    });
  }, [search]);

  return (
    <div>
      find countries
      <input
        type='text'
        value={search}
        onChange={handleChange}
      />
      <View
        countries={countries}
        handleShow={showDetails}
      />
    </div>
  );
}

export default App;
