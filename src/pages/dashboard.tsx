import React from 'react';
import BaseLayout from '../../components/BaseLayout';

const BloodData = [
  {
    type: 'A+',
    unit: '800 In Ml',
    av: 'Available',
  },

  {
    type: 'A-',
    unit: '800 In Ml',
    av: 'Available',
  },

  {
    type: 'B+',
    unit: '800 In Ml',
    av: 'Available',
  },

  {
    type: 'B-',
    unit: '800 In Ml',
    av: 'Available',
  },

  {
    type: 'AB+',
    unit: '800 In Ml',
    av: 'Available',
  },

  {
    type: 'AB-',
    unit: '800 In Ml',
    av: 'Available',
  },

  {
    type: 'O+',
    unit: '800 In Ml',
    av: 'Available',
  },

  {
    type: 'O-',
    unit: '800 In Ml',
    av: 'Available',
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-4 ml-3 gap-x-[19rem] gap-y-2 ">
      {BloodData.map((data) => {
        return (
          <div className="bg-[#7D0A0A] flex flex-col mb-3 px-4  justify-between p-5 w-72 h-52 rounded-xl ">
            <h1 className="text-white text-5xl  pt-7 text-center">
              {data.type}
            </h1>

            <div className="flex justify-between text-xs font-medium underline text-[#B6B7BC]">
              <p>Type</p>
              <p>{data.unit}L</p>
              <p>{data.av}</p>
            </div>
          </div>
        );
      })}
      {/* <h1 className="text-white text-5xl  pt-7 text-center">A+</h1>
      <div className="flex justify-between text-xs font-medium underline text-[#B6B7BC]">
        <p>Stock</p>
        <p>800 In ML</p>
        <p>Available</p>
      </div> */}
    </div>
  );
};

const dashboard = () => {
  return (
    <BaseLayout>
      <div>
        <div className="w-full p-8 font-body text-sm font-medium">
          <div className="bg-[#7D0A0A] px-5 py-4 mt-4 text-[#C5C6CD] text-xs font-medium rounded-2xl leading-6">
            <p>
              Loren is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-4 gap-6">
              <Cards />
            </div>
          </div>
        </div>
      </div>
      ;
    </BaseLayout>
  );
};

export default dashboard;
