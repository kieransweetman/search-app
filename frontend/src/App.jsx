/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SearchInput from '../src/components/search-input';
import SearchResultItem from '../src/components/search-result-item';
import apiHelper from '../src/helpers/api-helper';

import { randomIcon, randomImage } from "./helpers/random";


function App() {
  const [searchString, setSearchString] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchString) => {
    setSearchString(searchString);
  };



  useEffect(() => {
    if (searchString !== null) {
      apiHelper.starShipSearch(searchString)
        .then((data) => {
          setSearchResults(data);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    } else {
      setSearchResults(null);
    }
  }, [searchString]);



  return (
    <div className="flex flex-col absolute items-center justify-center w-full p-4 rounded-lg grow">
      <div className="w-[75%] rounded-lg  bg-slate-200">
        <SearchInput handleSearch={handleSearch} />
        {/* Ship List */}
        <ul className="h-auto w-full">
          {searchResults?.results.length > 0 && searchResults.results.map((starship) => (
            <li key={starship.name} className="rounded-lg hover:bg-slate-500 hover:cursor-pointer transition duration-300 px-4"
              onClick={() => window.open(starship.url, '_blank')}>
              <SearchResultItem starship={starship} img={randomImage()} icon={randomIcon()} />
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}



export default App