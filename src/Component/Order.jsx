import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import { TbMoodEmpty } from "react-icons/tb";
import OrderCard from './OrderCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Order() {

  const navigate = useNavigate();
  const CardItem = useSelector((state) => state.card.card);
  const [activeCard, setActiveCard] = useState(false);
  const itemQty = CardItem.reduce((itemQty, item) => itemQty + item.qty, 0)
  const priceQty = CardItem.reduce((total, item) => total + item.qty * item.CardData.Price, 0)

  const Order = () => {
    const itemIds = CardItem.map(item => item.CardData.id).join(', ');
    const itemName = CardItem.map((item) => item.CardData.Name).join(', ')

    const text =
      `ID: ${itemIds}
Name: ${itemName}
ItemQTY: ${itemQty}
Total Amount: ${priceQty}`;

    // Encode the entire string so newlines become %0A, etc.
    const encodedText = encodeURIComponent(text);

    const sms = `https://wa.me/7798594600?text=${encodedText}`;

    // const sms = `https://wa.me/7798594600?text=ID:${itemIds} %0AName:${itemName} %0AItemQTY:${itemQty} %0ATotal Amount:${priceQty}`;
    window.open(sms, "_blank");
    // console.log(`ID:${itemIds}  \nName:${itemName} \nItemQTY:${itemQty} \nTotal Amount:${priceQty}`);
    navigate('/success');
  }


  return (
    <>
      <div className={`top-0 right-0 fixed h-full bg-white w-full lg:w-[20vw] p-3 transition-all duration-500 z-50 ${activeCard ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex items-center my-3 justify-between'>
          <span className='text-gray-800 text-xl font-bold '>
            My Order
          </span>
          <IoMdClose onClick={() => setActiveCard(!activeCard)} className='border-2 rounded-md border-gray-600 font-bold text-xl hover:border-red-600 hover:text-red-600 cursor-pointer p-1' />
        </div>
        {CardItem.length > 0 ?
          CardItem.map((glass) => {
            return (
              <OrderCard key={glass.CardData.id} CardItem={glass} qty={glass.qty} />
            );
          }) :
          <>
            <span className='flex justify-center items-center mt-20 mr-auto' >
              <TbMoodEmpty className='h-40 w-40 ' />
            </span>
            <h1 className='flex justify-center items-center mt-5 mr-auto text-4xl font-semibold'>Empty..!</h1>
          </>
        }

        <div className='absolute bottom-2'>
          <h3 className='font-semibold '>Item : {itemQty} </h3>
          <h3 className='font-semibold mb-3'>Total Amount : ₹{priceQty}</h3>
          <button onClick={Order} className='w-[90vw] lg:w-[18vw] px-3 py-2 font-bold bg-green-500 hover:bg-gray-200 rounded-lg hover:text-black text-white'> Place Order</button>
        </div>
      </div>
      <BiSolidCart onClick={() => setActiveCard(true)} className={`cursor-pointer fixed bottom-4 right-4 text-5xl rounded-full p-3 shadow-md bg-white ${itemQty > 0 && " animate-bounce delay transition-all"}`} />
    </>
  );
}

export default Order;
