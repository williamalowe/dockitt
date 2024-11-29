import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DockittsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: dockitts } = await supabase.from("dockitts").select();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex-1 flex justify-center">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden lg:block"></th>
              <th>Task</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {dockitts &&
              dockitts.map((dockitt) => (
                <tr key={dockitt.id}>
                  <th className="hidden lg:block">
                    {
                      dockitt.tag ? <> {dockitt.id} -
                    <div className="ml-1 badge badge-outline">{dockitt.tag}</div></> :
                    <>{dockitt.id}</>
                    }
                  </th>
                  <th>{dockitt.task}</th>
                  <th>{dockitt.status}</th>
                  <th>{dockitt.priority}</th>
                  <th>{dockitt.description}</th>
                  <th></th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
