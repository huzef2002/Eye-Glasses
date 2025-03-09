import React from 'react';
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCard } from '../Redux/CardSlice';

function GlassICard({ CardData, handelTost }) {
    const dispatch = useDispatch();
    return (
        <div className=' lg:w-[260px] lg:h-[350px] w-[150px] h-[250px] bg-white p-1 lg:p-2 rounded-lg flex-col gap-1'>
            <div >
                <img src={CardData.img}
                    className='w-auto lg:h-[180px] h-[100px] hover:scale-[0.9] transition-all cursor-grab duration-500 ease-in-out' />
            </div>

            <div className='flex justify-between my-3'>
                <h2 className='font-bold text-[11px] lg:text-lg '>{CardData.Name.slice(0,20)} </h2>
                <span className='font-semibold lg:text-lg text-sm text-green-500'>{CardData.Price}</span>

            </div>
            <p className='text-[10px] lg:text-sm font-normal '> {CardData.Disclamer.slice(0,70)}</p>
            <div className='flex justify-between mt-2'>
                <span className='flex justify-center items-center' >
                    <FaStar fill='yellow' /> {CardData.Rating}
                </span>
                <button onClick={() => { dispatch(addToCard({ CardData, qty: 1 })); handelTost(CardData.Name) }} className='py-2 px-3 text-[10px] lg:text-base font-bold bg-green-500 hover:bg-gray-200 rounded-lg hover:text-black text-white'> Add to card</button>
            </div>

        </div>
    );
}

export default GlassICard;
