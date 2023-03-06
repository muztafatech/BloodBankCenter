import React from 'react';
import Header from '../../components/Header';
import { db } from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

const reqform = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [units, setUnits] = useState('');
  const [date, setDate] = useState('');
  const [district, setDistrict] = useState('');
  const [region, setRegion] = useState('');
  const [other, setOther] = useState('');

  const database = collection(db, 'usersreq');

  const handleClick = () => {
    addDoc(database, {
      from: from,
      to: to,
      bloodType: bloodType,
      units: units,
      date: date,
      district: district,
      region: region,
      other: other,
      time: serverTimestamp(),
    })
      .then(() => {
        setTo('');
        setBloodType('');
        setUnits('');
        setDate('');
        setDistrict('');
        setRegion('');
        setOther('');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Header />

      <div>
        <form action="" onSubmit={handleClick}>
          <div className="flex flex-col justify-center mt-32 items-center w-full ">
            <div className="bg-[#7D0A0A] grid grid-cols-1 gap-4 content-between   h-[25rem] p-8 rounded-xl  ">
              <div className="flex flex-col gap-y-4 justify-center mx-auto">
                <div className="flex gap-3 font-body text-xs font-medium ">
                  <input
                    onChange={(e) => {
                      setFrom(e.target.value);
                    }}
                    placeholder="From"
                    type="text"
                    className="bg-[#963333] text-white px-3 py-2 rounded-lg"
                  />
                  <input
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                    placeholder="To"
                    type="text"
                    className="bg-[#963333] text-white px-3 py-2 rounded-lg"
                  />
                </div>

                <div className="flex gap-3 font-body text-xs font-medium ">
                  <input
                    onChange={(e) => {
                      setBloodType(e.target.value);
                    }}
                    placeholder="Blood Type"
                    type="text"
                    className="bg-[#963333] text-white px-3 py-2 rounded-lg"
                  />
                  <input
                    onChange={(e) => {
                      setUnits(e.target.value);
                    }}
                    placeholder="Units"
                    type="number"
                    className="bg-[#963333] text-white px-3 py-2 rounded-lg"
                  />
                </div>

                <div className="flex gap-3 font-body text-xs font-medium ">
                  <input
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    placeholder="Date"
                    type="date"
                    className="bg-[#963333] w-[11rem] text-white px-3 py-2 rounded-lg"
                  />
                  <input
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    placeholder="District"
                    type="text"
                    className="bg-[#963333] text-white px-3 py-2 rounded-lg"
                  />
                </div>

                <div className="flex gap-3 font-body text-xs font-medium ">
                  <input
                    onChange={(e) => {
                      setRegion(e.target.value);
                    }}
                    placeholder="Region"
                    type="text"
                    className="bg-[#963333] text-white px-3 py-2 rounded-lg"
                  />
                  <input
                    onChange={(e) => {
                      setOther(e.target.value);
                    }}
                    placeholder="Other"
                    type="text"
                    className="bg-[#963333] text-white px-3 py-2 rounded-lg"
                  />
                </div>
              </div>

              <button
                // onClick={handleClick}
                className="bg-[#C23333] text-white py-2 rounded-lg "
              >
                Confirm
              </button>

              <p className="text-center text-xs font-semibold underline text-[#D7D7DA]">
                Please right code if you don’t remember contact with <br />{' '}
                admin panels they tell you what wrong.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reqform;
