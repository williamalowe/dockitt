import KanbanBoard from "@/components/KanbanBoard";
import { createClient } from "@/utils/supabase/server";

export default async function KanbanPage() {
  const supabase = await createClient();

  const { data: dockitts } = await supabase
    .from("dockitts")
    .select()
    .eq("project", "dockitt");

  return (
    <>
      <main className="flex flex-1">
        {dockitts && <KanbanBoard dockitts={dockitts} />}
      </main>
    </>
  );
}
