import { FC } from "react";
import { onlineStoreDishes } from "../../data";
import ReactStars from "react-stars";
import Image from "next/image";
import { ShapeIcon } from "../Icons/Icons";

const PopularProducts: FC = () => {
  return (
    <section className='mt-20 flex flex-col justify-between gap-10  '>
      <div className='container flex flex-col justify-center  items-center'>
        <h4 className='text-xl font-bold text-center text-slate-800 font-poppins'>
          ONLINE STORE
        </h4>
        <h1 className='text-5xl font-bold text-center text-mainRed font-abhaya tracking-tighter '>
          Popular Products
        </h1>
        <div className='mt-5 max-w-sm w-full justify-start flex'>
          <ShapeIcon />
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 mt-10 '>
        {onlineStoreDishes.map((dish) => (
          <div
            className='flex flex-col items-center justify-center gap-4'
            key={dish.id}
          >
            <Image src={dish.image} alt={dish.name} width={200} height={200} />
            <ReactStars
              count={5}
              value={dish.stars}
              size={24}
              color2={"#EA0000"}
            />
            <span className='text-sm font-normal text-center text-slate-800 font-poppins'>
              {dish.country}
            </span>
            <h1 className='text-xl font-bold text-center text-slate-800 font-poppins'>
              {dish.name}
            </h1>
            <button className='bg-mainRed polygon text-white px-8 py-2 rounded-md font-poppins font-bold text-lg'>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
