import UpdateStatusBtns from "@/components/UpdateStatusBtns";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { BsExclamationCircleFill } from "react-icons/bs";

export default async function KanbanPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: dockitts } = await supabase
    .from("dockitts")
    .select()
    .eq("project", "wayfarer");

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <main className="hidden flex-1 lg:flex justify-center gap-y-4 gap-x-4">
        <ul className="flex-1 flex flex-col gap-y-2 ">
          {/* <h2 className="italic text-2xl text-red-600">
            Backlog -{" "}
            {dockitts?.filter((item) => item.status === "Backlog").length}
          </h2> */}
          <div className="card bg-red-500 shadow-xl text-black/80">
            <div className="card-body py-4">
              <h2 className="card-title flex">
                Backlog
                <span className="ml-auto">
                  {dockitts?.filter((item) => item.status === "Backlog").length}
                </span>
              </h2>
            </div>
          </div>
          {dockitts?.filter((item) => item.status === "Backlog").length ===
          0 ? (
            <p>No dockitts remaining. Hooray!</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "Backlog")
              .map((dockitt) => (
                <li
                  key={dockitt.id}
                  className="relative hover:-rotate-2 transition"
                >
                  <div className="bg-red-500 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl" />
                  <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>
                      <p>{dockitt.description}</p>
                      <p className="mt-4 text-xs tracking-wide">
                        Submitted by:{" "}
                        <span className="italic font-bold">
                          {dockitt.created_by}
                        </span>
                      </p>

                      <div className="flex items-center">
                        <p>
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={1}
                          id={dockitt.id}
                          status="Backlog"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
        <ul className="flex-1 flex flex-col gap-y-2 ">
          <div className="card bg-yellow-500 shadow-xl text-black/80">
            <div className="card-body py-4">
              <h2 className="card-title flex">
                In Progress
                <span className="ml-auto">
                  {
                    dockitts?.filter((item) => item.status === "In Progress")
                      .length
                  }
                </span>
              </h2>
            </div>
          </div>
          {dockitts?.filter((item) => item.status === "In Progress").length ===
          0 ? (
            <p>No dockitts remaining. Hooray!</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "In Progress")
              .map((dockitt) => (
                <li
                  key={dockitt.id}
                  className="relative hover:-rotate-2 transition"
                >
                  <div className="bg-yellow-500 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl"></div>
                  <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>{" "}
                      <p>{dockitt.description}</p>
                      <p className="mt-4 text-xs tracking-wide">
                        Submitted by:{" "}
                        <span className="italic font-bold">
                          {dockitt.created_by}
                        </span>
                      </p>
                      <div className="flex items-center">
                        <p>
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={2}
                          id={dockitt.id}
                          status="In Progress"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
        <ul className="flex-1 flex flex-col gap-y-2 ">
          <div className="card bg-purple-500 shadow-xl text-black/80">
            <div className="card-body py-4">
              <h2 className="card-title flex">
                Under Review
                <span className="ml-auto">
                  {
                    dockitts?.filter((item) => item.status === "Under Review")
                      .length
                  }
                </span>
              </h2>
            </div>
          </div>
          {dockitts?.filter((item) => item.status === "Under Review").length ===
          0 ? (
            <p>No dockitts remaining. Hooray!</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "Under Review")
              .map((dockitt) => (
                <li
                  key={dockitt.id}
                  className="relative hover:-rotate-2 transition"
                >
                  <div className="bg-purple-500 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl"></div>
                  <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>{" "}
                      <p>{dockitt.description}</p>
                      <p className="mt-4 text-xs tracking-wide">
                        Submitted by:{" "}
                        <span className="italic font-bold">
                          {dockitt.created_by}
                        </span>
                      </p>
                      <div className="flex items-center">
                        <p>
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={2}
                          id={dockitt.id}
                          status="Under Review"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
        <ul className="flex-1 flex flex-col gap-y-2 ">
          <div className="card bg-green-500 shadow-xl text-black/80">
            <div className="card-body py-4">
              <h2 className="card-title flex">
                Completed
                <span className="ml-auto">
                  {
                    dockitts?.filter((item) => item.status === "Completed")
                      .length
                  }
                </span>
              </h2>
            </div>
          </div>
          {dockitts?.filter((item) => item.status === "Completed").length ===
          0 ? (
            <p>No dockitts completed.</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "Completed")
              .map((dockitt) => (
                <li
                  key={dockitt.id}
                  className="relative hover:-rotate-2 transition"
                >
                  <div className="bg-green-500 w-4 h-4 rounded-full absolute top-2 left-4 z-10 shadow-xl"></div>
                  <div className="flex-1 card bg-base-100 max-w-full shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>{" "}
                      <p>{dockitt.description}</p>
                      <p className="mt-4 text-xs tracking-wide">
                        Submitted by:{" "}
                        <span className="italic font-bold">
                          {dockitt.created_by}
                        </span>
                      </p>
                      <div className="flex items-center">
                        <p>
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={3}
                          id={dockitt.id}
                          status="Completed"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
      </main>
      {/*  */}
      {/* Mobile View */}
      {/*  */}
      <main className="lg:hidden flex-1 flex flex-col justify-center py-2 px-1 gap-y-4 gap-x-4">
        <div className="card bg-red-500 shadow-xl text-black/80">
          <div className="card-body py-4">
            <h2 className="card-title flex">
              Backlog
              <span className="ml-auto">
                {dockitts?.filter((item) => item.status === "Backlog").length}
              </span>
            </h2>
          </div>
        </div>
        <ul className="flex-1 flex gap-x-2 max-w-[100vw] overflow-scroll py-2">
          {dockitts?.filter((item) => item.status === "Backlog").length ===
          0 ? (
            <p>No dockitts remaining. Hooray!</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "Backlog")
              .map((dockitt) => (
                <li key={dockitt.id} className="relative">
                  <div className="flex-1 card bg-base-100 w-[80vw] shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>
                      <p>{dockitt.description}</p>
                      <div className="flex items-center">
                        <p className="text-sm">
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={1}
                          id={dockitt.id}
                          status="Backlog"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
        <div className="card bg-yellow-500 shadow-xl text-black/80">
          <div className="card-body py-4">
            <h2 className="card-title flex">
              In Progress
              <span className="ml-auto">
                {
                  dockitts?.filter((item) => item.status === "In Progress")
                    .length
                }
              </span>
            </h2>
          </div>
        </div>
        <ul className="flex-1 flex gap-x-2 max-w-[100vw] overflow-scroll py-2">
          {dockitts?.filter((item) => item.status === "In Progress").length ===
          0 ? (
            <p>No dockitts remaining. Hooray!</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "In Progress")
              .map((dockitt) => (
                <li key={dockitt.id} className="relative">
                  <div className="flex-1 card bg-base-100 w-[80vw] shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>{" "}
                      <p>{dockitt.description}</p>
                      <div className="flex items-center">
                        <p className="text-sm">
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={2}
                          id={dockitt.id}
                          status="In Progress"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
        <div className="card bg-purple-500 shadow-xl text-black/80">
          <div className="card-body py-4">
            <h2 className="card-title flex">
              Under Review
              <span className="ml-auto">
                {
                  dockitts?.filter((item) => item.status === "Under Review")
                    .length
                }
              </span>
            </h2>
          </div>
        </div>
        <ul className="flex-1 flex gap-x-2 max-w-[100vw] overflow-scroll py-2">
          {dockitts?.filter((item) => item.status === "Under Review").length ===
          0 ? (
            <p>No dockitts remaining. Hooray!</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "Under Review")
              .map((dockitt) => (
                <li key={dockitt.id} className="relative">
                  <div className="flex-1 card bg-base-100 w-[80vw] shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>{" "}
                      <p>{dockitt.description}</p>
                      <div className="flex items-center">
                        <p className="text-sm">
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={2}
                          id={dockitt.id}
                          status="Under Review"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
        <div className="card bg-green-500 shadow-xl text-black/80">
          <div className="card-body py-4">
            <h2 className="card-title flex">
              Completed
              <span className="ml-auto">
                {dockitts?.filter((item) => item.status === "Completed").length}
              </span>
            </h2>
          </div>
        </div>
        <ul className="flex-1 flex gap-x-2 max-w-[100vw] overflow-scroll py-2">
          {dockitts?.filter((item) => item.status === "Completed").length ===
          0 ? (
            <p>No dockitts completed.</p>
          ) : (
            dockitts
              ?.filter((item) => item.status === "Completed")
              .map((dockitt) => (
                <li key={dockitt.id} className="relative">
                  <div className="flex-1 card bg-base-100 w-[80vw] shadow-xl">
                    <div className="card-body relative">
                      {dockitt.tag && (
                        <div className="absolute top-2 right-4 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      )}
                      <h2 className="card-title">
                        {" "}
                        {dockitt.priority === "Critical" && (
                          <BsExclamationCircleFill className="text-red-500" />
                        )}
                        {dockitt.task}
                      </h2>{" "}
                      <p>{dockitt.description}</p>
                      <div className="flex items-center">
                        <p className="text-sm">
                          Priority:
                          {dockitt.priority === "Critical" ? (
                            <span className="uppercase font-bold text-red-500">
                              {" "}
                              {dockitt.priority}
                            </span>
                          ) : (
                            <span className="italic font-bold">
                              {" "}
                              {dockitt.priority}
                            </span>
                          )}
                        </p>
                        <UpdateStatusBtns
                          btnGroup={3}
                          id={dockitt.id}
                          status="Completed"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
      </main>
    </>
  );
}
