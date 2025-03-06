import React from 'react';
import Navebar from '../Component/Navebar';
import Catogary from '../Component/Catogary';
import GlassItem from '../Component/GlassItem';
import Slider from '../Component/Slider';
import Order from '../Component/Order';


function Home() {
  return (
    <div>
      <Order />
      <Navebar />
      <Catogary />
      <Slider/>
      <GlassItem />
    </div>

  );
}

export default Home;
