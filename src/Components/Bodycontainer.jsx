import { useState, useEffect } from 'react';
import Cardresto from './Cardresto'; 
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import useActivestatus from './custom hooks/useActivestatus';

const slideshowImages = [
  '3876105.jpg',
  '10143605.jpg',
  '3896166.jpg',
];

const Bodycontainer = () => {
  const [listofrest, setlistofrest] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filteredrest, setfilteredrest] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      '/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setlistofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const activestatus = useActivestatus();
  if (activestatus === false) {
    return (
      <div>
        <h1 className='font-extrabold text-center mt-6'>OOPS you lost internet connection !!!!!!</h1>
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideshowImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideshowImages.length - 1 ? 0 : prev + 1));
  };

  return listofrest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center w-full">
      
      <div className="relative w-full max-w-6xl overflow-hidden rounded-lg mb-8 mt-6">
        <img
          src={slideshowImages[currentSlide]}
          alt={`slide-${currentSlide}`}
          className="w-full h-60 md:h-96 object-cover"
        />
        
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#10094;
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#10095;
        </button>
        
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-pink-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

     
      <div className="flex justify-center items-center space-x-4 p-4 w-full max-w-6xl">
        <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm flex-1">
          <input
            className="border border-gray-300 rounded-lg text-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="text"
            placeholder="Search for Restaurant"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
            onClick={() => {
              const filteredres = listofrest.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredrest(filteredres);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 bg-pink-200 text-pink-800 font-semibold rounded-lg border-2 border-pink-700 hover:bg-pink-300 transition duration-300"
          onClick={() => {
            const topRated = listofrest.filter(
              (res) => res.info && res.info.avgRating && res.info.avgRating > 4.5
            );

            if (topRated.length === 0) {
              alert("No top-rated restaurants found!");
            }

            setfilteredrest(topRated);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      
      <div className="flex flex-wrap gap-6 justify-center md:justify-normal items-center pl-6">
        {filteredrest.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/resturant/" + restaurant.info.id}>
            <Cardresto Data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bodycontainer;
