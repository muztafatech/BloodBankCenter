import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Call from '../../public/call.svg';
import Email from '../../public/email.svg';

const DonationP = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-center align-middle items-center">
        <div className="pt-48 w-10/12 flex flex-col justify-center m-auto">
          <h1 className=" text-white text-center base text-3xl font-bold underline">
            Donation
          </h1>

          <div className="flex flex-col justify-center mx-auto ">
            <p className="font-body text-xs mx-auto font-medium pt-10 text-center  md:w-[50%] leading-7 text-[#A0A0A0]">
              Synchronous execution means that each part of the program waits
              for the previous part to complete before it executes. In other
              words, synchronous operations are performed in a sequence, one
              after the other, and each operation blocks the execution until it
              is complete.
            </p>
          </div>

          <div className="text-[#A0A0A0] flex mx-auto mt-6 gap-8">
            <div className="flex gap-3 text-xs font-medium font-body items-center">
              <Image src={Call} alt="icon" width={18} height={18} />
              <p>252 63 00 878 878</p>
            </div>

            <div className="flex gap-3 text-xs font-medium font-body items-center">
              <Image src={Email} alt="icon" width={18} height={18} />
              <p>Info@balansame.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationP;
