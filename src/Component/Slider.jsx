import React, { useState } from 'react';
import { Carousel } from 'nuka-carousel';
import { useSelector } from 'react-redux';

function Slider() {
  const search = useSelector((state) => state.search.search);
  return (
    <div>
      {
        search < " " ? <div >
          <Carousel autoplay={true} autoplayInterval={5000} wrapMode="wrap" showArrows={true} showDots>
            
              <img  className=' lg:object-cover lg:h-[450px] h-40' src="https://www.bestgoggle.com/image/catalog/revslider_media_folder/slide31.png" />
              <img className=' lg:object-cover lg:h-[450px] h-40' src="https://www.woggles.in/api/catalog/Homepage/homepage-nov24/desktop/faceshape_d.jpg" />
              <img className=' lg:object-cover lg:h-[450px] h-40' src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/1076/applications/5ea82cc2b496555b51caafa3/theme/pictures/free/resize-w:1500/theme-image-1729263047141.png?dpr=1" />
            
          </Carousel>
        </div> : null
      }
    </div>
  );
}

export default Slider;
