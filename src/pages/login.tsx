import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../config/Auth';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [admin, setAdmin] = useState({
    email: '',
    password: '',
  });

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log(admin);

    try {
      await login(admin.email, admin.password);
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex h-screen w-screen  f text-white">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-12 align-middle max-[665px]:my-auto">
          <h1 className="text-center text-3xl font-bold text-[#fff] underline stroke-white outline-2 font-display">
            Login your account
          </h1>

          <form action="" onSubmit={handleClick}>
            <div className="mx-auto flex font-body flex-col gap-4">
              <input
                onChange={(e: any) =>
                  setAdmin({ ...admin, email: e.target.value })
                }
                type="text"
                placeholder="Email / username"
                className="bg-[#963333] w-72 px-3 py-3 rounded-lg text-xs font-medium"
              />

              <input
                onChange={(e: any) =>
                  setAdmin({ ...admin, password: e.target.value })
                }
                type="password"
                placeholder="Password"
                className="bg-[#963333] w-72 px-3 py-3 rounded-lg text-xs font-medium"
              />

              <button
                // onClick={handleClick}
                className="bg-[#C23333] py-3 rounded-lg text-sm font-medium text-white"
              >
                Confirm
              </button>
            </div>
          </form>

          <p className="text-center text-gray-300 text-xs font-medium">
            If you have not an account please create an <br />
            account click{' '}
            <Link
              href="/signup"
              className="text-[#e7d3d3] font-semibold cursor-pointer"
            >
              Signup{' '}
            </Link>
            or go back{' '}
            <Link
              href="/"
              className="text-[#e7d3d3] font-semibold cursor-pointer"
            >
              Home{' '}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
