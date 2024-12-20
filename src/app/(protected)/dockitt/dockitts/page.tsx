import UpdateStatusBtns from "@/components/UpdateStatusBtns";
import { createClient } from "@/utils/supabase/server";

export default async function DockittsPage() {
  const supabase = await createClient();

  const { data: dockitts } = await supabase
    .from("dockitts")
    .select()
    .eq("project", "dockitt");

  return (
    <main className="flex-1 flex justify-center">
      <div className="overflow-x-auto w-full">
        {/* normal view */}
        <table className="hidden lg:table table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className=""></th>
              <th>Task</th>
              <th className="">Status</th>
              <th className="">Priority</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {dockitts &&
              dockitts.map((dockitt) => (
                <tr key={dockitt.id}>
                  <th className="">{dockitt.id}</th>
                  <th>
                    {" "}
                    {dockitt.tag ? (
                      <>
                        {" "}
                        {dockitt.task}
                        <div className="ml-1 badge badge-outline">
                          {dockitt.tag}
                        </div>
                      </>
                    ) : (
                      <>{dockitt.task}</>
                    )}
                  </th>
                  <th className="">{dockitt.status}</th>
                  <th className="">{dockitt.priority}</th>
                  <th className="">{dockitt.description}</th>
                  <th>
                    {" "}
                    {dockitt.status === "Backlog" ? (
                      <UpdateStatusBtns
                        btnGroup={1}
                        id={dockitt.id}
                        status="Backlog"
                      />
                    ) : dockitt.status === "In Progress" ? (
                      <UpdateStatusBtns
                        btnGroup={2}
                        id={dockitt.id}
                        status="In Progress"
                      />
                    ) : dockitt.status === "Under Review" ? (
                      <UpdateStatusBtns
                        btnGroup={2}
                        id={dockitt.id}
                        status="Under Review"
                      />
                    ) : dockitt.status === "Completed" ? (
                      <UpdateStatusBtns
                        btnGroup={3}
                        id={dockitt.id}
                        status="Completed"
                      />
                    ) : (
                      <UpdateStatusBtns
                          btnGroup={4}
                          id={dockitt.id}
                          status="Cancelled"
                        />
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        {/* mobile view */}
        <table className="lg:hidden table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {dockitts &&
              dockitts.map((dockitt) => (
                <tr key={dockitt.id} className="flex flex-col">
                  <th>{dockitt.task}</th>
                  <th className="font-normal">{dockitt.description}</th>
                  <th className="flex flex-col">
                    {" "}
                    {dockitt.status === "Backlog" ? (
                      <UpdateStatusBtns
                        btnGroup={1}
                        id={dockitt.id}
                        status="Backlog"
                      />
                    ) : dockitt.status === "In Progress" ? (
                      <UpdateStatusBtns
                        btnGroup={2}
                        id={dockitt.id}
                        status="In Progress"
                      />
                    ) : dockitt.status === "Under Review" ? (
                      <UpdateStatusBtns
                        btnGroup={2}
                        id={dockitt.id}
                        status="Under Review"
                      />
                    ) : dockitt.status === "Completed" ? (
                      <UpdateStatusBtns
                        btnGroup={3}
                        id={dockitt.id}
                        status="Completed"
                      />
                    ) : (
                      <UpdateStatusBtns
                        btnGroup={4}
                        id={dockitt.id}
                        status="Cancelled"
                      />
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
