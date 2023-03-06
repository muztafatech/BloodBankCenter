import React from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

const DonerInputs = () => {
  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  const database = collection(db, 'users');

  const handleClick = () => {
    addDoc(database, {
      name: name,
      bloodType: bloodType,
      gender: gender,
      age: age,
      phoneNumber: number,
      date: date,
      time: serverTimestamp(),
    })
      .then(() => {
        setName('');
        setBloodType('');
        setGender('');
        setAge('');
        setNumber('');
        setDate('');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="bg-[#8D0808]/0 backdrop-blur-sm mt-8 rounded-2xl">
        <div className=" ">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Full Name"
            className="bg-[#963333]/90 px-3 text-white py-4 rounded-xl mb-3 mr-3 max-[700px]:w-full"
          />

          <input
            onChange={(e) => setBloodType(e.target.value)}
            value={bloodType}
            type="search"
            placeholder="Blood Type"
            className="bg-[#963333]/90 text-white px-3 py-4 rounded-xl mb-3 mr-3 max-[700px]:w-full"
          />

          <input
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            placeholder="Gender"
            className="bg-[#963333]/90 px-3 text-white py-4 rounded-xl mb-3 mr-3 max-[700px]:w-full"
          />

          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            placeholder="Age"
            className="bg-[#963333]/90 px-3 text-white py-4 rounded-xl mb-3 mr-3 max-[700px]:w-full"
          />

          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            placeholder="Phone Number"
            className="bg-[#963333]/90 px-3 text-white py-4 rounded-xl mb-3 mr-3 max-[700px]:w-full"
          />

          <button
            onClick={handleClick}
            className="px-8 py-4 mb-3 mr-3 max-[700px]:w-full rounded-xl bg-[#C23333] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonerInputs;
