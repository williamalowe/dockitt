"use client";
import Link from "next/link";

const projects = [
  {
    title: "Wayfarer",
    href: "/wayfarer/dockitts",
  },
  {
    title: "Dockitt",
    href: "/dockitt/dockitts",
  },
];

const ProjectDropdown = () => {
  return (
    <div className="flex-1 flex dropdown w-[160px] justify-center">
      <div tabIndex={0} role="button" className="btn m-1 w-[160px]">
        Project Boards
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
