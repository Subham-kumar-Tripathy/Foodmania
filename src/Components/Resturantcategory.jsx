import React, { useState } from 'react'
import Listitem from './Listitem';

const Resturantcategory = ({data ,showitems,setshowitems}) => {

  const clickhandler=()=>{
   setshowitems();
  }
    
//  console.log(data);
  return (
    <div className='w-full'>
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer' onClick={clickhandler}>
    <div className='flex justify-between'>
    <span className='font-semibold text-lg'>{data.title} ({data.itemCards.length})</span>
    <span>▼ </span>
    </div>
    {showitems &&< Listitem items={data.itemCards}/>}
    </div>
    </div>
  );
};

export default Resturantcategory
