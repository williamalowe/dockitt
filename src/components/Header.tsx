import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import NewDockittModal from "./NewDockittModal";
import Avatar from "./Avatar";

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
      <header className="hidden lg:flex navbar bg-base-100 gap-x-12">
        <div className="flex flex-col items-start">
          <p className="text-sm">Currently Working On:</p>
          <p className="font-bold">{currentProject.toUpperCase()}</p>
        </div>
        <label className="input input-bordered flex items-center gap-2 text-sm rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="flex gap-x-4 ml-auto">
          <Avatar username={user.email} />
          <NewDockittModal selectedProject={currentProject} status={"Backlog"}/>
        </div>
      </header>
    </>
  );
}
