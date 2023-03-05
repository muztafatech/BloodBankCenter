import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="font-body pt-7 flex items-center justify-between w-10/12 m-auto ">
      <div>
        <p className=" text-[#6379E5] text-lg font-bold">
          <Link href="/">
            Balan<span className="text-[#fff]">same</span>
          </Link>
        </p>
      </div>

      <div className=" cursor-pointer text-xs text-[#fff] font-medium space-x-5 underline ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
