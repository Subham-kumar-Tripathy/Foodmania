import { RESTAURANT_IMG } from "./urlhub";

const Cardresto = (props) => {
  const { Data } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = Data?.info;

  return (
    <div className="w-72 h-[350px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300  cursor-pointer flex flex-col">
      <img
        className="w-full h-40 object-cover rounded-t-xl"
        src={RESTAURANT_IMG + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 truncate">{name}</h1>
          <p className="text-sm text-gray-500">{cuisines.join(', ')}</p>

          <div className="flex items-center space-x-2 mt-2">
            <span className="flex items-center space-x-1 text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.39 6.84 7.5.61-5.45 4.73 1.64 7.48L12 17.77l-6.08 3.88 1.64-7.48-5.45-4.73 7.5-.61L12 2z" />
              </svg>
              <span>{avgRating}</span>
            </span>
            <span className="text-gray-500">• {sla?.slaString} min</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-red-600">{costForTwo}</p>
          <button className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-md hover:bg-yellow-400 transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardresto;

