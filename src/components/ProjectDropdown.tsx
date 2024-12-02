"use client"

import Link from "next/link";
import React, { useState } from "react";

const projects = [
    {
        title: "Wayfarer",
        href: "/wayfarer/dockitts"
    },
    {
        title: "Dockitt",
        href: "/dockitt/dockitts"
    },
]

const ProjectDropdown = () => {
    const [selected, setSelected] = useState("Select Project")
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {selected}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {
            projects.map((project) => 
            <li key={project.href} onClick={() => setSelected(project.title)}>
                <Link href={project.href}>{project.title}</Link>
            </li>
            )
        }
        {/* <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li> */}
      </ul>
    </div>
  );
};

export default ProjectDropdown;
