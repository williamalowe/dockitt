import Link from "next/link";
import { AiFillMessage, AiOutlineAppstoreAdd, AiOutlineUnorderedList } from "react-icons/ai";
import NewDockittModal from "./NewDockittModal";

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
    // {
    //   href: "./dashboard",
    //   icon: <AiOutlineLineChart />,
    // },
  ];
  
const MobileNav = ({ currentProject }: {
    currentProject: string
}) => {
  return (
    <nav className="bg-neutral p-2 w-full z-30">
       <ul className="flex justify-around">
        {
            navItems.map((item) => 
            <li key={item.href}>
                <Link href={item.href}>
                <button className="btn btn-ghost text-white/80 text-xl">{item.icon}</button>
                </Link>
            </li>
        )
        }
        <li>
            <NewDockittModal selectedProject={currentProject} />
        </li>
       </ul>
    </nav>
  )
}

export default MobileNav