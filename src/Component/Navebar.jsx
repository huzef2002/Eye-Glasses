import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../Redux/SearchSlice';

function Navebar() {

  const dispatch = useDispatch();
  return (
    <>
      <nav className=' flex justify-between lg:flex-row flex-col py-3 mx-6 mb-10'>
        <div>
          <h3 className='text-xl '> {new Date().toUTCString().slice(0, 16)}</h3>
          <h2 className=' text-2xl font-bold'> Roshni Opticals </h2>
        </div>
        <div>
          <input onClick={() => setSlide(false)} onChange={(e) => dispatch(setSearch(e.target.value))} type='search' name='search' placeholder='Search' autoComplete='off' className='p-3 border-gray-400 text-sm rounded-lg w-full lg:w-[25vw]' />
        </div>
      </nav>

    </>
  );
}

export default Navebar;
