import Header from "@/components/Header";
// import ProjectDropdown from "@/components/ProjectDropdown";
// import Sidebar from "@/components/Sidebar";
// import Welcome from "@/components/Welcome";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className='min-h-screen flex flex-col px-2 lg:px-8 py-4'>
    //   {/* Normal View */}
    //   <div className='hidden lg:flex items-center'>
    //     <div className='flex items-center'>
    //       <Sidebar selectedProject='wayfarer'/>
    //       <ProjectDropdown />
    //     </div>
    //     <h1 className='flex-1 text-center font-bold text-2xl'>Wayfarer Project Board</h1>
    //     <Welcome />
    //   </div>
    //   {/* Mobile View */}
    //   <div className='flex flex-col lg:hidden items-center'>
    //   <Welcome />
    //     <div className='flex items-center'>
    //       <Sidebar selectedProject='wayfarer'/>
    //       <ProjectDropdown />
    //     </div>
    //     <h1 className='flex-1 text-center font-bold text-2xl'>Wayfarer Project Board</h1>
    //   </div>
    //     {children}
    // </div>
    <div className="min-h-screen flex flex-col">
      <Header currentProject={"wayfarer"} />
      <div className="flex-1 flex p-2">
      {children}
      </div>
    </div>
  );
};

export default layout;
