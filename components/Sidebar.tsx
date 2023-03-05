import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Message from '../public/Feedback.svg';
import Home from '../public/Home.svg';
import Recycle from '../public/Analytics.svg';
import Setting from '../public/Setting.svg';
import Logout from '../public/Logout.svg';
import { useAuth } from '../config/Auth';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div>
      <div className="">
        <div className="bg-[#586BCC]/90 font-body flex flex-col gap-2 h-screen w-[260px] px-4 py-5">
          <div className="mt-6 px-3">
            <p className=" text-[#040612] ml-2 text-lg font-bold">
              <Link href="/">
                Balan<span className="text-[#fff]">same</span>
              </Link>
            </p>

            <div className="flex flex-col gap-4 text-[#040612] text-xs justify-between mt-6 cursor-pointer ">
              <div className="flex gap-2 font-semibold underline hover:bg-[#040612] hover:text-gray-200  px-3 py-2 rounded-lg text-sm">
                <Image src={Home} alt="logout" width="16" height="16" />
                <p>Home</p>
              </div>

              <div className="flex gap-2 font-semibold px-3 py-2 hover:bg-[#040612] hover:text-gray-200 rounded-lg underline text-sm">
                <Image src={Recycle} alt="option" width="16" height="16" />
                <p>Analytics</p>
              </div>

              <div className="flex gap-2 font-semibold px-3 py-2 hover:bg-[#040612] hover:text-gray-200 rounded-lg underline text-sm">
                <Image src={Setting} alt="info" width="16" height="16" />
                <p>Setting</p>
              </div>

              <div className="flex gap-2 font-semibold px-3 py-2 hover:bg-[#040612] hover:text-gray-200 rounded-lg underline text-sm">
                <Image src={Message} alt="info" width="16" height="16" />
                <p>Feedback</p>
              </div>

              <div
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                className="flex gap-2 font-semibold px-3 py-2 hover:bg-[#040612] hover:text-gray-200 rounded-lg underline text-sm"
              >
                <Image src={Logout} alt="info" width="16" height="16" />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
