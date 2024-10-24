import propTypes from 'prop-types';

export default function SearchResultItem({ starship, img, icon }) {

    return (
        <div className="space-y-4 ">
            <div className="flex  justify-between items-center  p-2 ">
                <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img src={img} alt={starship.name} className=" h-full w-full rounded-lg" />
                    </div>
                    <div className="bg-transparent">
                        <h3 className="font-semibold text-gray-800">{starship.name}</h3>
                        <p>
                            <span>{starship.manufacturer}</span>
                            <span> | </span>
                            <span>Crew: {starship.crew}</span>
                        </p>
                    </div>
                </div>
                <div className="w-6 h-6 bg-transparent rounded-full flex items-center justify-center">
                    <img src={icon} alt="Rebel Alliance" className="bg-transparent" />
                </div>
            </div>

        </div>
    );
}


SearchResultItem.propTypes = {
    starship: propTypes.object.isRequired,
    img: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
}