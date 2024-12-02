"use client";
import Link from "next/link";
import { BsCaretDownFill } from "react-icons/bs";

const projects = [
  {
    title: "Dockitt",
    href: "/dockitt/dockitts",
  },
  {
    title: "Wayfarer",
    href: "/wayfarer/dockitts",
  },
];

const ProjectDropdown = () => {
  return (
    <div className="dropdown flex-1">
      <div tabIndex={0} role="button" className="btn m-1 w-[160px]">
        Switch Projects <BsCaretDownFill />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {projects.map((project) => (
          <li key={project.href}>
            <Link href={project.href}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDropdown;
