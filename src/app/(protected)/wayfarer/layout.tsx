import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
// import ProjectDropdown from "@/components/ProjectDropdown";
// import Sidebar from "@/components/Sidebar";
// import Welcome from "@/components/Welcome";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed z-30 w-full">
        <Header currentProject="wayfarer" />
      </div>
      <div className="flex-1 flex">
        <div className="fixed z-30 top-[80px]">
          <Sidebar currentProject="wayfarer" />
        </div>
        <div className="ml-[80px] mt-[80px] flex-1 p-2">{children}</div>
      </div>
    </div>
  );
};

export default layout;
