import React from "react";
import SideBar from "../../components/SideBar";
import Header_2 from "../../components/Header_2";

const AdminLayout = ({children}) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header_2 />
      <SideBar />
      {children}
    </div>
  );
};

export default AdminLayout;
