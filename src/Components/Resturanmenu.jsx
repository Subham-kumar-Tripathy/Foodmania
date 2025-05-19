import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useMenusetup from './custom hooks/useMenusetup';
import Resturantcategory from './Resturantcategory';
import { useState } from 'react';

const Resturanmenu = () => {
    const{resid}=useParams();

    const menu=useMenusetup(resid);
    const[showitems,setshowitems]=useState(0);
    
   if(menu===null)return <Shimmer/>;

   const{name,avgRating,totalRatingsString,costForTwoMessage,cuisines}=menu?.cards?.[2]?.card?.card?.info;
   const{itemCards}=menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  //  console.log("this is your menu card")
  //  console.log(menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  const category=
  menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

//  console.log(category);
  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-4xl font-bold'>{name}</h1>
      <div className='flex mt-4 font-semibold'>
      <h2>{avgRating}</h2>
      <h2>{totalRatingsString}</h2>
      <h2>{costForTwoMessage}</h2>
      </div>
      <h3 className='font-semibold'>{cuisines.join(",")}</h3>
      {
        category.map((cate,index)=>(
          <Resturantcategory key={cate?.card?.card?.title} data={cate?.card?.card}
          showitems={index===showitems ? true :false}
          setshowitems={()=>setshowitems(index)}/>
        ))}
    </div> 
  )
}

export default Resturanmenu
