import propTypes from 'prop-types';

export default function SearchInput({ handleSearch }) {

    return (
        <form id='serach-input-form' name='starship-search-form' className="flex space-x-2 p-4 items-center mb-6 bg-transparent" onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.target);
            const inputValue = form.get("search-input");
            if (inputValue === '') return;

            handleSearch(inputValue);

        }}>
            <input
                id="search-input"
                name="search-input"
                type="text"
                onChange={(e) => {
                    if (e.target.value === '') {
                        handleSearch(null);
                    }
                }}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800"
            />
            <button type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                Search
            </button>
        </form>
    );

}

SearchInput.propTypes = {
    handleSearch: propTypes.func.isRequired,
}