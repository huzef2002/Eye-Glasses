import React from 'react';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { decrementQty, incrementQty, removeToCard } from '../Redux/CardSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


function OrderCard({ CardItem, qty }) {
    const dispatch = useDispatch();
    const handelRemoveTost = () => {
        toast.error(' Removed Successfully');
    }
    return (
        <div className=' flex shadow-md rounded-lg p-2 mb-4'>
            <div className='flex'>
                <MdDelete onClick={() => { dispatch(removeToCard(CardItem.CardData.id)); handelRemoveTost() }} className='absolute right-7' />
                <img src={CardItem.CardData.img}
                    className='h-[50px] w-[50px]' />

            </div>

            <div className='leading-5'>
                <h2>{CardItem.CardData.Name}</h2>
                <div className='flex  justify-between'>
                    <span className='font-bold text-green-500 text-sm'>{CardItem.CardData.Price}</span>
                    <div className='flex justify-center items-center absolute right-7'>
                        <FaMinus onClick={() => qty > 1 ? dispatch(decrementQty(CardItem.CardData.id)) : (qty = 0)} className='border-2 rounded-md border-gray-600 font-bold text-gray-600 hover:bg-green-500  hover:text-white transition-all ease-linear text-xl cursor-pointer p-1' />
                        <span className='mx-1'> {qty} </span>
                        <FaPlus onClick={() => dispatch(incrementQty(CardItem.CardData.id))} className='border-2 rounded-md border-gray-600 font-bold text-gray-600 hover:bg-green-500  hover:text-white transition-all ease-linear text-xl cursor-pointer p-1' />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default OrderCard;
