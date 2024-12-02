import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import {
  AiFillMessage,
  AiOutlineAppstoreAdd,
  AiOutlineLineChart,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import ProjectDropdown from "./ProjectDropdown";
import NewDockittModal from "./NewDockittModal";
import Avatar from "./Avatar";
import ThemeSwitcher from "./ThemeSwitcher";
import { redirect } from "next/navigation";

const navItems = [
  {
    href: "./dockitts",
    icon: <AiOutlineUnorderedList />,
  },
  {
    href: "./kanban",
    icon: <AiOutlineAppstoreAdd />,
  },
  {
    href: "./message-board",
    icon: <AiFillMessage />,
  },
  {
    href: "./dashboard",
    icon: <AiOutlineLineChart />,
  },
];

export default async function Header({
  currentProject,
}: {
  currentProject: string;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      {/* Normal View */}
      <header className="hidden lg:flex navbar bg-neutral">
        <ul className="flex-1 flex gap-x-2 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <button className="btn aspect-square text-xl hover:scale-110 transition">
                  {item.icon}
                </button>
              </Link>
            </li>
          ))}
          <li>
            <ProjectDropdown />
          </li>
        </ul>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white/80 capitalize">{currentProject}&apos;s Dockitts</h1>
        </div>
        <div className="flex-1 flex items-center gap-x-2 justify-end">
          <NewDockittModal selectedProject={currentProject} />
          <ThemeSwitcher />
          <Avatar username={user.email?.slice(0, 1)} />
        </div>
      </header>
    </>
  );
}
