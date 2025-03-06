import React, { useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { useState } from 'react';

function Success() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, []);
  return (
    <div className=' flex flex-col justify-center items-center h-screen '>

      {
        loader ? <PulseLoader size={30} margin={12} color='green' /> :
          <div>
            <h2 className=' font-semibold text-3xl mb-4 text-center'> Order Successful..! </h2>
            <p> Your order has been Successfully placed</p>
          </div>
      }
    </div>
  );
}

export default Success;
