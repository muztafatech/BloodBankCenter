import { type } from 'os';
import React from 'react';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode | ReactNode[];
}

const BaseLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default BaseLayout;
