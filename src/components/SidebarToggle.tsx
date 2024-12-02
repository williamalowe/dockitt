"use client";

import { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const SidebarToggle = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShowSidebar(!showSidebar)}>
        {showSidebar ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
      </button>

      {/* {showSidebar && <div className="fixed top-0 left-0 w-screen h-screen bg-black/90" onClick={() => setShowSidebar(false)}>SidebarToggle</div>} */}
    </>
  );
};

export default SidebarToggle;
