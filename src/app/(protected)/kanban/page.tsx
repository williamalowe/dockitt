import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  BsCaretLeftFill,
  BsCaretRightFill,
  BsCheck,
  BsTrash2,
  BsX,
} from "react-icons/bs";

export default async function KanbanPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: dockitts } = await supabase.from("dockitts").select();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex-1 flex gap-x-4">
      <ul className="flex-1 flex flex-col gap-y-2 ">
        <h2 className="italic text-2xl text-red-600">Backlog - {dockitts?.filter((item) => item.status === "Backlog").length}</h2>
        {dockitts
          ?.filter((item) => item.status === "Backlog")
          .map((dockitt) => (
            <li
              key={dockitt.id}
              className="relative hover:-rotate-2 transition"
            >
              <div className="bg-red-600 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl"></div>
              <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{dockitt.task}</h2>
                  <p>{dockitt.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm text">
                      <BsTrash2 />
                    </button>
                    <button className="btn btn-sm text">
                      <BsCaretRightFill />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <ul className="flex-1 flex flex-col gap-y-2 ">
        <h2 className="italic text-2xl text-yellow-600">In Progress- {dockitts?.filter((item) => item.status === "In Progress").length}</h2>
        {dockitts
          ?.filter((item) => item.status === "In Progress")
          .map((dockitt) => (
            <li
              key={dockitt.id}
              className="relative hover:-rotate-2 transition"
            >
              <div className="bg-yellow-600 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl"></div>
              <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{dockitt.task}</h2>
                  <p>{dockitt.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm">
                      <BsX />
                    </button>
                    <button className="btn btn-sm">
                      <BsCaretLeftFill />
                    </button>
                    <button className="btn btn-sm">
                      <BsCaretRightFill />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <ul className="flex-1 flex flex-col gap-y-2 ">
        <h2 className="italic text-2xl text-purple-600">Under Review- {dockitts?.filter((item) => item.status === "Under Review").length}</h2>
        {dockitts
          ?.filter((item) => item.status === "Under Review")
          .map((dockitt) => (
            <li
              key={dockitt.id}
              className="relative hover:-rotate-2 transition"
            >
              <div className="bg-purple-600 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl"></div>
              <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{dockitt.task}</h2>
                  <p>{dockitt.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm">
                      <BsX />
                    </button>
                    <button className="btn btn-sm">
                      <BsCaretLeftFill />
                    </button>
                    <button className="btn btn-sm">
                      <BsCaretRightFill />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <ul className="flex-1 flex flex-col gap-y-2 ">
        <h2 className="italic text-2xl text-emerald-600">Completed- {dockitts?.filter((item) => item.status === "Completed").length}</h2>
        {dockitts
          ?.filter((item) => item.status === "Completed")
          .map((dockitt) => (
            <li
              key={dockitt.id}
              className="relative hover:-rotate-2 transition"
            >
              <div className="bg-emerald-600 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl"></div>
              <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{dockitt.task}</h2>
                  <p>{dockitt.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm">
                      <BsCaretLeftFill />
                    </button>
                    <button className="btn btn-sm">
                      <BsCheck />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
