import React from 'react';
import { RESTAURANT_IMG } from './urlhub';
import { useDispatch } from 'react-redux';
import { additem } from './CartSlice';

const Listitem = ({ items, showAddButton = true }) => {
  const dispatch = useDispatch();

  const clickhandler = (item) => {
    dispatch(additem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className='p-2 m-2 border-b-2 border-gray-200 flex'>
          <div className='py-2 w-9/12'>
            <span className='font-bold text-lg'>{item.card.info.name}</span>
            <br />
            <span className='font-semibold'>
              ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </span>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>

          <div className='w-3/12'>
            {showAddButton && (
              <div className='absolute'>
                <button
                  onClick={() => clickhandler(item)}
                  className='p-2 font-semibold shadow-lg m-auto rounded-lg bg-pink-800 text-white relative left-20 bottom-3 w-20'
                >
                  ADD +
                </button>
              </div>
            )}
            <img src={RESTAURANT_IMG + item.card.info.imageId} className='w-full' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listitem;
