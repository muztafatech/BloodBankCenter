import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Message from '../public/Feedback.svg';
import DashboardIcon from '../public/Home.svg';
import DonerIcon from '../public/Analytics.svg';
import SettingIcon from '../public/Setting.svg';
import LogoutIcon from '../public/Logout.svg';
import { useAuth } from '../config/Auth';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const sideBarItems: any = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: DashboardIcon,
    },

    {
      name: 'Blood Donner',
      href: '/blooddoners',
      icon: DonerIcon,
    },

    {
      name: 'Blood Requests',
      href: '/bloodreq',
      icon: Message,
    },

    {
      name: 'Setting',
      href: '/setting',
      icon: SettingIcon,
    },
  ];

  return (
    <div>
      <div className="">
        <div className="bg-[#7D0A0A] font-body flex flex-col gap-2 h-screen w-[250px] px-4 py-5">
          <div className="mt-6 ">
            <p className=" ml-2 text-lg font-bold underline text-white">
              <Link href="/">
                <p className="text-white">BloodBank</p>
              </Link>
            </p>

            <div className="flex flex-col gap-5 text-[#C5C6CD] text-xs justify-between mt-8 cursor-pointer ">
              {sideBarItems.map((item: any) => {
                return (
                  <div>
                    <Link href={item.href}>
                      <div className="flex gap-2 font-medium underline hover:bg-[#981919] hover:text-gray-200  px-3 py-2 rounded-lg text-sm">
                        <Image
                          src={item.icon}
                          alt="logout"
                          width="16"
                          height="16"
                        />
                        <p className="text-[#C5C6CD]">{item.name}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}

              <div
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                className="flex gap-2 font-medium px-3 py-2 hover:bg-[#981919] hover:text-gray-200 rounded-lg underline text-sm"
              >
                <Image src={LogoutIcon} alt="info" width="16" height="16" />
                <p className="text-[#C5C6CD]">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
