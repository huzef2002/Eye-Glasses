import React from 'react';
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCard } from '../Redux/CardSlice';

function GlassICard({ CardData, handelTost }) {
    const dispatch = useDispatch();
    return (
        <div className='w-[260px] h-[350px] bg-white p-2 rounded-lg flex-col gap-2'>
            <div >
                <img src={CardData.img}
                    className='w-auto h-[180px] hover:scale-[0.9] transition-all cursor-grab duration-500 ease-in-out' />
            </div>

            <div className='flex justify-between my-3'>
                <h2 className='font-bold'>{CardData.Name} </h2>
                <span className='font-semibold text-green-500'>{CardData.Price}</span>

            </div>
            <p className='text-sm font-normal'> {CardData.Disclamer.slice(0.60)}</p>
            <div className='flex justify-between mt-2'>
                <span className='flex justify-center items-center' >
                    <FaStar fill='yellow' /> {CardData.Rating}
                </span>
                <button onClick={() => { dispatch(addToCard({ CardData, qty: 1 })); handelTost(CardData.Name) }} className='px-3 py-2 font-bold bg-green-500 hover:bg-gray-200 rounded-lg hover:text-black text-white'> Add to card</button>
            </div>

        </div>
    );
}

export default GlassICard;
