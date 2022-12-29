import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className=' mt-20 lg:mt-0'>
      <div className='container flex flex-col justify-center p-6  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly  '>
        <div className='flex flex-col justify-center items-center gap-5 text-center rounded-sm lg:text-left'>
          <div className='flex flex-col   lg:max-w-md xl:max-w-lg  gap-4 justify-center '>
            <span className='text-lg text-mainRed font-semibold uppercase font-poppins'>
              NOW TAKING ONNLINE ORDERS
            </span>
            <h1 className='text-9xl font-abhaya font-extrabold text-mainRed -tracking-widest'>
              kababs
            </h1>
            <p className='text-xl text-mainbg-mainDark  font-poppins text-left  '>
              Restaurant style Yogurt Mint Sauce is delicious dip which is quick
              and easy to make. This is a standard Indian mint chutney served
              with poppadums along with mint and lemon.
            </p>
          </div>
          <div className='flex w-full items-center mt-10 font-poppins'>
            <button className='bg-mainRed polygon-red text-white px-8 py-4  rounded-md font-poppins font-bold text-lg'>
              <span className='mr-4'>Add To Cart</span>
            </button>
            <button className='bg-mainDark text-white polygon-black px-8 py-4 rounded-md font-poppins font-bold text-lg '>
              <span className='ml-4'>Book A Table</span>
            </button>
          </div>
          <div className='flex w-full items-center mt-10 gap-6 font-poppins'>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-lg font-bold text-slate-800'>Lunch</span>
              <span className='text-md  text-mainDark'>1:00-03:00 PM</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-lg font-bold text-slate-800'>Dinner</span>
              <span className='text-md  text-mainDark'>7:00-10:00 PM</span>
            </div>
          </div>
        </div>
        <div className=' flex relative  '>
          <Image
            src='/assets/hero/kebab-image.png'
            alt='kebab image'
            width={1000}
            height={1000}
            quality={100}
            className='w-full h-full object-contain'
          />
          <Image
            src='/assets/hero/left-top-left.png'
            alt='leaf top left'
            width={50}
            height={50}
            className='absolute top-0 left-0'
          />
          <Image
            src='/assets/hero/left-top-right.png'
            alt='leaf top right'
            width={50}
            height={50}
            className='absolute top-0 right-0'
          />
          <Image
            src='/assets/hero/leaf-left-bottom.png'
            alt='leaf bottom left'
            width={50}
            height={50}
            className='absolute bottom-0 left-0'
          />
          <Image
            src='/assets/hero/blurry-leaf.png'
            alt='blurry leaf'
            width={100}
            height={100}
            className='absolute bottom-0 right-0'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
