import React from 'react';
import GlassICard from './GlassICard';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


export const CardData = [
  {
    id: 1,
    img: 'https://himalayaoptical.com/cdn/shop/products/888392509062_2_370x320.jpg?v=1645514126',
    Name: 'Aviator Sunglasses',
    Price: 899,
    Disclamer: 'Classic aviator design with polarized lenses for superior clarity for superior clarity.',
    Rating: '4.7',
    class: 'Aviator'
  },
  {
    id: 2,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/B/GBU228TR53_A.jpg',
    Name: 'Wayfarer Sunglasses',
    Price: 799,
    Disclamer: 'Iconic wayfarer style with a modern twist for everyday use.',
    Rating: '4.5',
    class: 'Aviator'
  },
  {
    id: 3,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/B/GBU229BL53_A.jpg',
    Name: 'Round Retro Sunglasses',
    Price: 850,
    Disclamer: 'Vintage round sunglasses that combine retro charm with modern style.',
    Rating: '4.6',
    class: 'Aviator'
  },
  {
    id: 4,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/B/GBU200BL51_a.jpg',
    Name: 'Sporty Wrap Sunglasses',
    Price: 950,
    Disclamer: 'Designed for an active lifestyle, these wrap sunglasses offer excellent UV protection.',
    Rating: '4.3',
    class: 'Sport'
  },
  {
    id: 5,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/B/GBU273BR52_A.jpg',
    Name: 'Modern Square Sunglasses',
    Price: 1000,
    Disclamer: 'Sleek and stylish square frames with a modern design and premium lenses.',
    Rating: '4.8',
    class: 'Modern'
  },
  {
    id: 6,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/B/GBU230LG55_A.jpg',
    Name: 'Clubmaster Sunglasses',
    Price: 1200,
    Disclamer: 'A blend of classic and modern design, perfect for both casual and formal occasions.',
    Rating: '4.4',
    class: 'Cat-Eye'
  },
  {
    id: 7,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/E/GEA279GR52_A.jpg',
    Name: 'Vintage Cat-Eye Sunglasses',
    Price: 1100,
    Disclamer: 'Elegant cat-eye frames that add a touch of glamour to any outfit.',
    Rating: '4.2',
    class: 'Cat-Eye'
  },
  {
    id: 8,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/E/GEA284BU52_A.jpg',
    Name: 'Polarized Pilot Sunglasses',
    Price: 1300,
    Disclamer: 'High-performance polarized lenses with the classic pilot design.',
    Rating: '4.9',
    class: 'Luxury'
  },
  {
    id: 9,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/V/GVR171BR55_A.jpg',
    Name: 'Slim Rim Sunglasses',
    Price: 750,
    Disclamer: 'Minimalist slim rim design that provides a clean, modern look.',
    Rating: '4.1',
    class: 'Modern'
  },
  {
    id: 10,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/V/GVR170GL63_A.jpg',
    Name: 'Oversized Fashion ',
    Price: 1400,
    Disclamer: 'Bold oversized frames that make a stylish statement for any occasion.',
    Rating: '4.5',
    class: 'Luxury'
  },
  {
    id: 11,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/E/GEA230MB54_A.jpg',
    Name: 'Foldable Travel Sunglasses',
    Price: 850,
    Disclamer: 'Convenient foldable design, ideal for travel and everyday use.',
    Rating: '4.3',
    class: 'Sport'
  },
  {
    id: 12,
    img: 'https://www.gkboptical.com/media/catalog/product/cache/d8c10273a35b6dc0667ea18e2ce5e902/G/E/GEA279GR52_A.jpg',
    Name: 'Luxury Designer Sunglass',
    Price: 2000,
    Disclamer: 'Premium designer sunglasses crafted with high-quality materials.',
    Rating: '4.8',
    class: 'Luxury'
  }
];
function GlassItem() {

  const catogary = useSelector((state) => state.catogary.catogary);

  const search = useSelector((state) => state.search.search);

  const handelTost = (Name) => {
    toast.success(`${Name} Added Successfully`);
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <div className='flex gap-3 lg:gap-10 flex-wrap justify-center items-center lg:justify-start my-3 lg:ms-6 lg:my-6'>
        {
          CardData.filter((glass) => {
            if (catogary === "All") {
              return glass.Name.toLowerCase().includes(search.toLowerCase());
            }
            else {
              return catogary === glass.class && glass.Name.toLowerCase().includes(search.toLowerCase());
            }
          }).map((items) => {
            return (
              <GlassICard CardData={items} handelTost={handelTost} key={items.id} />
            );

          })
        }

        {/* {CardData.map((items) => {
          return (<GlassICard CardData={items} handelTost={handelTost} key={items.id} />);

        })} */}
      </div>
    </>
  );
}

export default GlassItem;

