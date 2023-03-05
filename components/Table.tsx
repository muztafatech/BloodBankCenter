import React, { useEffect } from 'react';
import { db } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { useState } from 'react';

const Table = () => {
  // type T = Array<any>[];

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
    <div>
      <div className="w-full p-8  font-body text-sm font-medium">
        <div className="bg-[#85ABF3]/60 px-5 py-4 mt-4 text-gray-900 text-xs font-medium rounded-2xl leading-6">
          <p>
            Deegsan waa shirkad u hamuun qabta ka shaynta deegan ka iyo dib u
            warshadayn ta wax yaabaha aynu isticmaalanay, u jeed ka yagu waa
            deegaan bilicsan oo nadiif ah kaas oo aynu isku da yeyno inaanu
            xalino dhibaatadaas.
          </p>
        </div>
        <table className="text-sm w-full mt-9 text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs font-medium bg-[#586BCC]/50 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>

              <th scope="col" className="px-6 py-3">
                Hospital
              </th>

              <th scope="col" className="px-6 py-3">
                Full Name
              </th>

              <th scope="col" className="px-6 py-3">
                Appointment
              </th>

              <th scope="col" className="px-6 py-3">
                Phone number
              </th>

              <th scope="col" className="px-6 py-3">
                Amount
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {userData.map((data) => (
              <tr key={data.id} className=" text-gray-400 border-b text-xs">
                <td className="px-6 py-4">01015</td>
                <td className="px-6 py-4">{data.hospitalName}</td>
                <td className="px-6 py-4">{data.patientName}</td>
                <td className="px-6 py-4">{data.phoneNumber}</td>
                <td className="px-6 py-4">{data.date}</td>
                <td className="px-6 py-4">Free</td>
                <td className="px-6 flex gap-2 py-4 cursor-pointer">
                  <p>✅</p>
                  <p onClick={() => handleDelete(data.id)}>❌</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* {userData.map((data) => console.log(data.time[int32 nanos = 2;]))} */}
      </div>
    </div>
  );
};

export default Table;
