// import Header from '@/components/Header'
import ProjectDropdown from "@/components/ProjectDropdown";
import Sidebar from "@/components/Sidebar";
import Welcome from "@/components/Welcome";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col px-2 lg:px-8 py-4">
      <div className='flex items-center'>
        <div className='flex items-center'>
          <Sidebar selectedProject='Wayfarer'/>
          <ProjectDropdown />
        </div>
        <h1 className='flex-1 text-center font-bold text-2xl'>Wayfarer Project Board</h1>
        <Welcome />
      </div>
      {children}
    </div>
  );
};

export default layout;
