import * as React from "react";
import { SVGProps } from "react";

export const SearchIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='19'
      fill='none'
      viewBox='0 0 19 19'
      {...props}
    >
      <path
        fill='#000'
        fillRule='evenodd'
        d='M15.872 14.812a9 9 0 10-1.06 1.06l2.658 2.658a.75.75 0 101.06-1.06l-2.658-2.658zM16.5 9a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export const CartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='19'
      fill='none'
      viewBox='0 0 20 19'
      {...props}
    >
      <path
        fill='#000'
        fillRule='evenodd'
        d='M3.699 5L8.097.785a2.75 2.75 0 013.806 0L16.3 5h2.546a1 1 0 01.99 1.141l-1.469 10.283A3 3 0 0115.398 19H4.602a3 3 0 01-2.97-2.576L.163 6.141A1 1 0 011.153 5h2.546zm5.436-3.132a1.25 1.25 0 011.73 0L14.133 5H5.867l3.268-3.132zM1.73 6.5l1.387 9.712A1.5 1.5 0 004.602 17.5h10.796a1.5 1.5 0 001.485-1.288L18.27 6.5H1.73z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export const UserIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='19'
      viewBox='0 0 20 19'
      {...props}
    >
      <path d='M12 3C9.803 3 8 4.803 8 7s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4zm0 2c1.116 0 2 .884 2 2s-.884 2-2 2-2-.884-2-2 .884-2 2-2zm0 9c-1.745 0-3.813.41-5.55 1.096-.87.343-1.655.75-2.284 1.273C3.537 16.892 3 17.6 3 18.5V21h18v-2.5c0-.9-.537-1.608-1.166-2.13-.629-.524-1.414-.931-2.283-1.274C15.813 14.41 13.745 14 12 14zm0 2c1.414 0 3.346.374 4.818.955.737.29 1.359.637 1.737.951.377.315.445.529.445.594v.5H5v-.5c0-.065.068-.28.445-.594.378-.314 1-.66 1.737-.95C8.654 16.373 10.586 16 12 16z'></path>
    </svg>
  );
};

export const ShapeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='185'
      height='23'
      fill='none'
      viewBox='0 0 185 23'
      {...props}
    >
      <path
        stroke='#EA0000'
        strokeLinecap='round'
        strokeWidth='2'
        d='M1 22c14.395-7.08 115.23-35.91 183-11.127'
      ></path>
    </svg>
  );
};
