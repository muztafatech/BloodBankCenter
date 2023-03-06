import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="font-body bg-[#790909]/80 py-4 w-full flex items-center justify-between  m-auto ">
      <div className="w-10/12 flex items-center justify-between  m-auto ">
        <div>
          <p className="text-lg font-bold">
            <Link href="/">
              <span className="text-[#fff] underline">BloodBank</span>
            </Link>
          </p>
        </div>

        <div className=" cursor-pointer text-xs text-[#fff] font-medium space-x-5 underline ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/donation">Donation</Link>
          <Link href="/reqcode">Blood Req</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
