import React, { useEffect, useState } from 'react';
import { CardData } from '../Component/GlassItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCatogary } from '../Redux/CatogarySlice';

function Catogary() {
  const [catogarys, setCatogaries] = useState([]);

  const ListCatogsryManage = () => {
    const uniqueCatagary = [
      ...new Set(CardData.map((item) => item.class)),
    ];
    setCatogaries(uniqueCatagary);
    console.log(uniqueCatagary);

  }

  useEffect(() => {
    ListCatogsryManage();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.catogary.catogary);

  return (
    <div>
      <div>
        <h3 className='font-semibold'>Find the best Goggal</h3>
      </div>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button onClick={() => dispatch(setCatogary('All'))} className={`mt-4 px-3 py-2 font-bold bg-gray-200 hover:bg-green-500 rounded-lg hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>
        {
          catogarys.map((item, index) => {
            return (
              <button onClick={() => dispatch(setCatogary(item))} key={index} className={`mt-4 px-3 py-2 font-bold bg-gray-200 hover:bg-green-500 rounded-lg hover:text-white ${selectedCategory === item && "bg-green-500 text-white"}`}>{item}</button>
            );
          })
        }
      </div>
    </div>
  );
}

export default Catogary;
