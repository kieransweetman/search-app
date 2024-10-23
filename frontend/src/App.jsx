/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DATA } from "../utils/common";

function App() {
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (searchString != '') {
      return setSearchResults(
        DATA.filter((starship) =>
          starship.name.toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }

    setSearchResults(DATA);
  }, [searchString]);
  const StarshipItem = ({ starship }) => {
    return (
      <div className="space-y-4 bg-slate-200 ">
        {/* List Item 1 */}
        <div className="flex  justify-between items-center bg-transparent p-2  hover:shadow-lg transition duration-300">
          <div className="flex items-center space-x-4 w-full bg-transparent">
            {/* Example Image Placeholder */}
            <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
              <img src={starship.image} alt={starship.name} className="bg-transparent h-full w-full rounded-md" />
            </div>
            <div className="bg-transparent">
              <h3 className="font-semibold text-gray-800 bg-transparent">{starship.name}</h3>
              <p>
                <span>{starship.manufacturer}</span>
                <span> | </span>
                <span>Crew: {starship.crew}</span>
              </p>
            </div>
          </div>
          {/* Rebel Icon Placeholder */}
          <div className="w-6 h-6 bg-transparent rounded-full flex items-center justify-center">
            {/* <span className="text-xs text-gray-600">R</span> */}
            <img src={starship.alliance} alt="Rebel Alliance" className="bg-transparent" />
          </div>
        </div>

      </div>
    );
  }



  return (
    <div className="flex flex-col absolute items-center justify-center w-full p-4 rounded-lg grow">
      {/* Search Bar */}
      <div className="w-[75%] rounded-lg p-4 bg-slate-200">
        <div className="flex space-x-2 items-center mb-6 bg-transparent">
          <input
            id="search-input"
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800"
          />
          <button
            onClick={() => {
              const inputValue = document.getElementById("search-input").value;
              console.log(inputValue);
              setSearchString(inputValue);
            }}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
            Search
          </button>
        </div>

        {/* Ship List */}
        <ul className="h-auto w-auto">

          {searchString !== '' && searchResults.map((starship) => (
            <li key={starship.name} className="">
              <StarshipItem starship={starship} />
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}



export default App