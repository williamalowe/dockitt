import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

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
  
    return (
    <>
      {/* Normal View */}
      <div className="flex flex-col min-h-[calc(100vh-80px)] max-w-[80px] p-2 h-full btn rounded-none items-start justify-start">
        <ul className="flex flex-col gap-y-2">
            <li>
                <Link href={'./backlog'}>
                <button className="btn aspect-square w-full text-black/80 bg-red-500 hover:bg-red-500 text-xl hover:scale-110 transition">
                        {dockitts?.filter((dockitt) => dockitt.status === "Backlog").length}
                    </button>
                </Link>
            </li>
            <li>
                <Link href={'./in-progress'}>
                <button className="btn aspect-square w-full text-black/80 bg-yellow-500 hover:bg-yellow-500 text-xl hover:scale-110 transition">
                        {dockitts?.filter((dockitt) => dockitt.status === "In Progress").length}
                    </button>
                </Link>
            </li>
            <li>
                <Link href={'./under-review'}>
                <button className="btn aspect-square w-full text-black/80 bg-purple-500 hover:bg-purple-500 text-xl hover:scale-110 transition">
                        {dockitts?.filter((dockitt) => dockitt.status === "Under Review").length}
                    </button>
                </Link>
            </li>
            <li>
                <Link href={'./completed'}>
                <button className="btn aspect-square w-full text-black/80 bg-green-500 hover:bg-green-500 text-xl hover:scale-110 transition">
                        {dockitts?.filter((dockitt) => dockitt.status === "Completed").length}
                    </button>
                </Link>
            </li>
            <li>
                <Link href={'./cancelled'}>
                <button className="btn aspect-square w-full text-black/80 bg-rose-600 hover:bg-rose-600 text-xl hover:scale-110 transition">
                        {dockitts?.filter((dockitt) => dockitt.status === "Cancelled").length}
                    </button>
                </Link>
            </li>
        </ul>
      </div>
    </>
  );
};
