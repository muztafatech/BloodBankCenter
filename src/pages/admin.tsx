import React from 'react';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Table />
    </div>
  );
};

export default Admin;
