import Link from "next/link";
import {
  AiOutlineAppstoreAdd,
  AiOutlineForm,
  AiOutlineLineChart,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import ThemeSwitcher from "./ThemeSwitcher";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const navLinks = [
  {
    header: "All Tasks",
    href: "/dockitts",
    icon: <AiOutlineUnorderedList />,
  },
  {
    header: "Kanban Board",
    href: "/kanban",
    icon: <AiOutlineAppstoreAdd />,
  },
  {
    header: "Notes",
    href: "/notes",
    icon: <AiOutlineForm />,
  },
  {
    header: "Dashboard",
    href: "/dashboard",
    icon: <AiOutlineLineChart />,
  },
];

const dockittList = [
  {
    header: "Backlog",
    href: "/",
    color: "bg-red-600",
    count: 2,
  },
  {
    header: "In Progress",
    href: "/",
    color: "bg-yellow-600",
    count: 2,
  },
  {
    header: "Under Review",
    href: "/",
    color: "bg-purple-600",
    count: 2,
  },
  {
    header: "Completed",
    href: "/",
    color: "bg-emerald-600",
    count: 2,
  },
  {
    header: "Cancelled",
    href: "/",
    color: "bg-red-800",
    count: 2,
  },
];

export default async function Sidebar(){
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: dockitts } = await supabase.from("dockitts").select();

  if (!user) {
    return redirect("/login");
  }
  
  return (
    <>
      <div className="drawer z-20">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>{" "}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <h5 className="font-bold">Welcome to Dockitt. </h5>
            <p className="mt-6 font-bold">Views</p>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex">
                  {link.header} <span className="ml-auto">{link.icon}</span>
                </Link>
              </li>
            ))}
            <p className="mt-6 font-bold">Dockitts</p>
            {dockittList.map((dockittItem) => (
              <li key={dockittItem.header}>
                <Link href={dockittItem.href} className="flex">
                  <div className={`w-4 h-4 rounded ${dockittItem.color}`} />
                  {dockittItem.header}{" "}
                  <span className="ml-auto">
                    {
                      dockittItem.header === "Backlog" ? dockitts?.filter((dockitt) => dockitt.status === "Backlog").length :
                      dockittItem.header === "In Progress" ? dockitts?.filter((dockitt) => dockitt.status === "In Progress").length :
                      dockittItem.header === "Under Review" ? dockitts?.filter((dockitt) => dockitt.status === "Under Review").length :
                      dockittItem.header === "Completed" ? dockitts?.filter((dockitt) => dockitt.status === "Completed").length :
                      dockitts?.filter((dockitt) => dockitt.status === "Cancelled").length

                    }

                  </span>
                </Link>
              </li>
            ))}
            <li className="mt-auto">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
