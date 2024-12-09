import { createClient } from "@/utils/supabase/server";
import {
  HiOutlineChartSquareBar,
  HiOutlineChatAlt,
  HiOutlineViewGridAdd,
} from "react-icons/hi";
import Link from "next/link";

const MobileNav = async ({ currentProject }: { currentProject: string }) => {
  const supabase = await createClient();

  const { data: dockitts } = await supabase
    .from("dockitts")
    .select()
    .eq("project", currentProject);

  return (
    <>
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn m-1">
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <h5 className="font-bold">Projects</h5>
            <ul className="menu flex flex-col gap-y-4">
              <li>
                <Link href={"/wayfarer/dockitts"}>Wayfarer</Link>
              </li>
              <li>
                <Link href={"/dockitt/dockitts"}>Dockitt</Link>
              </li>
            </ul>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
            <h5>Dockitts</h5>
            <ul>
              <li>
                <Link href={"./dockitts"}>All Dockitts</Link>
              </li>
              <li className="" />
              <li>
                <Link href={"./backlog"} className="flex items-center">
                  <div className="p-1 w-6 border border-red-500/80 text-red-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">
                    {
                      dockitts?.filter(
                        (dockitt) => dockitt.status === "Backlog"
                      ).length
                    }
                  </div>
                  Backlog
                </Link>
              </li>
              <li>
                <Link href={"./in-progress"} className="flex items-center">
                  <div className="p-1 w-6 border border-yellow-500/80 text-yellow-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">
                    {
                      dockitts?.filter(
                        (dockitt) => dockitt.status === "In Progress"
                      ).length
                    }
                  </div>
                  In Progress
                </Link>
              </li>
              <li>
                <Link href={"./under-review"} className="flex items-center">
                  <div className="p-1 w-6 border border-purple-500/80 text-purple-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">
                    {
                      dockitts?.filter(
                        (dockitt) => dockitt.status === "Under Review"
                      ).length
                    }
                  </div>
                  Under Review
                </Link>
              </li>
              <li>
                <Link href={"./completed"} className="flex items-center">
                  <div className="p-1 w-6 border border-green-500/80 text-green-500/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">
                    {
                      dockitts?.filter(
                        (dockitt) => dockitt.status === "Completed"
                      ).length
                    }
                  </div>
                  Completed
                </Link>
              </li>
              <li>
                <Link href={"./cancelled"} className="flex items-center">
                  <div className="p-1 w-6 border border-rose-600/80 text-rose-600/80 flex items-center justify-center rounded-full text-xs aspect-square mr-auto">
                    {
                      dockitts?.filter(
                        (dockitt) => dockitt.status === "Cancelled"
                      ).length
                    }
                  </div>
                  Cancelled
                </Link>
              </li>
            </ul>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
