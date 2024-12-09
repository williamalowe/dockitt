import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Logo from "./Logo";
import { redirect } from "next/navigation";
import ProfileIcon from "./ProfileIcon";
import {
  HiChevronDown,
  HiOutlineChartSquareBar,
  HiOutlineChatAlt,
  HiOutlineClipboardList,
  HiOutlineCollection,
  HiOutlineViewGridAdd,
} from "react-icons/hi";

export default async function Sidebar({
  currentProject,
}: {
  currentProject: string;
}) {
  const supabase = await createClient();

  const { data: dockitts } = await supabase
    .from("dockitts")
    .select()
    .eq("project", currentProject);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      {/* Normal View */}
      <div className="hidden p-2 lg:flex max-w-[220px] flex-col bg-neutral text-white w-64">
        <div className="ml-4 mb-8">
          <Logo />
        </div>
        <ProfileIcon username={user.email} />
        <div className="dropdown dropdown-hover mt-4 mb-12">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost rounded-full m-1 w-full items-center"
          >
            <span>
              <HiOutlineCollection />
            </span>
            Project List <HiChevronDown className="ml-auto" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu text-neutral bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href={"/wayfarer/dockitts"}>Wayfarer</Link>
            </li>
            <li>
              <Link href={"/dockitt/dockitts"}>Dockitt</Link>
            </li>
          </ul>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost rounded-full m-1 w-full justify-start"
        >
          <span>
            <HiOutlineChartSquareBar />
          </span>
          Dashboard
        </div>

        <Link
          href={"./kanban"}
          tabIndex={0}
          role="button"
          className="btn btn-ghost rounded-full m-1 w-full justify-start"
        >
          <span>
            <HiOutlineViewGridAdd />
          </span>
          Project Board
        </Link>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost rounded-full m-1 w-full items-center"
          >
            <span>
            <HiOutlineClipboardList />
            </span>
            Dockitts <HiChevronDown className="ml-auto" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu text-neutral bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href={"./dockitts"}>All Dockitts</Link>
            </li>
            <li className=""/>
            <li>
              <Link href={"./backlog"} className="flex items-center"><div className="p-1 w-6 border border-red-500/80 text-red-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">{dockitts?.filter((dockitt) => dockitt.status === "Backlog").length}</div>Backlog</Link>
            </li>
            <li>
              <Link href={"./in-progress"} className="flex items-center"><div className="p-1 w-6 border border-yellow-500/80 text-yellow-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">{dockitts?.filter((dockitt) => dockitt.status === "In Progress").length}</div>In Progress</Link>
            </li>
            <li>
              <Link href={"./under-review"} className="flex items-center"><div className="p-1 w-6 border border-purple-500/80 text-purple-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">{dockitts?.filter((dockitt) => dockitt.status === "Under Review").length}</div>Under Review</Link>
            </li>
            <li>
              <Link href={"./completed"} className="flex items-center"><div className="p-1 w-6 border border-green-500/80 text-green-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">{dockitts?.filter((dockitt) => dockitt.status === "Completed").length}</div>Completed</Link>
            </li>
            <li>
              <Link href={"./cancelled"} className="flex items-center"><div className="p-1 w-6 border border-rose-600/80 text-rose-600/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">{dockitts?.filter((dockitt) => dockitt.status === "Cancelled").length}</div>Cancelled</Link>
            </li>
          </ul>
        </div>
        <Link
          href={"./message-board"}
          tabIndex={0}
          role="button"
          className="btn btn-ghost rounded-full m-1 w-full justify-start"
        >
          <span>
            <HiOutlineChatAlt />
          </span>
          Message Board
        </Link>
      </div>
    </>
  );
}
