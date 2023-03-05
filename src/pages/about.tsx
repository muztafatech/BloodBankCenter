import React from 'react';
import Header from '../../components/Header';

const about = () => {
  return (
    <div className="">
      <Header />

      <div className="pt-48 w-10/12 flex flex-col justify-center m-auto">
        <h1 className=" text-white text-center base text-3xl font-bold underline">
          Balansame
        </h1>

        <div className="flex flex-col justify-center mx-auto ">
          <p className="font-body md:w-[50%] text-xs mx-auto font-medium pt-10 text-center leading-7  text-[#A0A0A0]">
            Synchronous execution means that each part of the program waits for{' '}
            the previous part to complete before it executes. In other words,{' '}
            synchronous operations are performed in a sequence, one after the{' '}
            other, and each operation blocks the execution until it is complete.
            synchronous operations are performed in a sequence, one after the{' '}
            other, and each operation blocks the execution until it is complete.
            in a sequence, one after the other, and each operation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
