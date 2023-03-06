import React, { useState, useEffect } from 'react';
import BaseLayout from '../../components/BaseLayout';
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

import DonerInputs from '../../components/DonerInputs';

// type T = Array<any>[];

const blooddoners = () => {
  const database = collection(db, 'users');
  const q = query(database, orderBy('time', 'desc'));
  const [userData, setUserData] = useState<Array<any>>([]);

  useEffect(() => {
    // getData();
    const getData = async () => {
      await getDocs(q).then((res) => {
        setUserData(
          res.docs.map((data: any): any => {
            return { ...data.data(), id: data.id };
          })
        );
      });
    };

    getData();
  }, []);

  const handleDelete = (id: any) => {
    let deleteOne = doc(database, id);
    deleteDoc(deleteOne);
  };

  return (
    <BaseLayout>
      <div>
        <div className="w-full p-8  font-body text-sm font-medium">
          <div className="bg-[#7D0A0A] px-5 py-4 mt-4 text-[#C5C6CD] text-xs font-medium rounded-2xl leading-6">
            <p>
              Loren is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <DonerInputs />
          <table className="text-sm w-full mt-9 text-left text-[#C5C6CD] dark:text-gray-400">
            <thead className="text-xs font-medium bg-[#7D0A0A] text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  userID
                </th>

                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>

                <th scope="col" className="px-6 py-3">
                  Blood Type
                </th>

                <th scope="col" className="px-6 py-3">
                  Gender
                </th>

                <th scope="col" className="px-6 py-3">
                  Age
                </th>

                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {userData.map((data) => (
                <tr key={data.id} className=" text-[#C5C6CD] border-b text-xs">
                  <td className="px-6 py-4">01015</td>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.bloodType}</td>
                  <td className="px-6 py-4">{data.gender}</td>
                  <td className="px-6 py-4">{data.age}</td>
                  <td className="px-6 py-4">{data.phoneNumber}</td>

                  <td className="px-6 flex gap-2 py-4 cursor-pointer">
                    <p>✅</p>
                    <p onClick={() => handleDelete(data.id)}>❌</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout>
  );
};

export default blooddoners;
