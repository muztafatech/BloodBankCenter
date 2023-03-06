import React, { useEffect } from 'react';
import Header from '../../components/Header';
import react, { useState } from 'react';
import { db } from '../../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from 'firebase/firestore';

import { useRouter } from 'next/router';

const reqcode = () => {
  const [code, setCode] = useState<Array<number>>([]);
  const [userInput, setuserInput] = useState<number | string>();
  const router = useRouter();

  const database = collection(db, 'userscode');

  useEffect(() => {
    getDocs(database).then((res) => {
      setCode(
        res.docs.map((data: any): any => {
          return data.data();
        })
      );
    });
  }, []);

  let q = code.map((data: any): any => {
    return data.reqcode;
  });

  let q2 = q[0];

  // console.log(q2);

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log(code);

    try {
      // await login(admin.email, admin.password);

      if (q2 === Number(userInput)) {
        console.log('correct');
        alert('Successfully 🎉');
        router.push('/reqform');
      } else {
        router.push('/');
        alert('Please enter correct code number');
        console.log('wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center mt-32 items-center w-full ">
        <div className="bg-[#7D0A0A] grid grid-cols-1 gap-4 content-between  w-[30rem] h-[25rem] p-8 rounded-xl  ">
          <h1 className="text-xl font-bold text-white text-center">
            Verification Code{' '}
          </h1>
          <div className="flex flex-col gap-y-4 justify-center mx-auto">
            <input
              onChange={(e) => {
                setuserInput(e.target.value);
              }}
              type="password"
              className="bg-[#963333] text-white px-3 py-2 rounded-lg"
            />
            <button
              onClick={handleClick}
              className="bg-[#C23333] text-white py-2 rounded-lg "
            >
              Confirm
            </button>
          </div>
          <p className="text-center text-xs font-semibold underline text-[#D7D7DA]">
            Please right code if you don’t remember contact with <br /> admin
            panels they tell your verification code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default reqcode;
