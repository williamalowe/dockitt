import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/*  */}
      {/* Normal View */}
      {/*  */}
      <div className="hidden min-h-screen lg:flex flex-col">
        <div className="fixed z-30 w-full">
          <Header currentProject="dockitt" />
        </div>
        <div className="flex-1 flex">
          <div className="fixed z-30 top-[80px]">
            <Sidebar currentProject="dockitt" />
          </div>
          <div className="ml-[80px] mt-[80px] flex-1 p-2">{children}</div>
        </div>
      </div>
      {/*  */}
      {/* Normal View */}
      {/*  */}
      <div className="flex flex-col min-h-screen lg:hidden">
        <div className="mb-[64px]">
        <MobileHeader currentProject="dockitt" />
        {children}
        </div>
        <div className="fixed bottom-0 w-full">
          <MobileNav currentProject="dockitt"/>
        </div>
      </div>
    </>
  );
};

export default layout;
