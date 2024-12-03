import DockittKanban from "@/components/DockittKanban";
import { createClient } from "@/utils/supabase/server";

export default async function KanbanPage() {
  const supabase = await createClient();

  const { data: dockitts } = await supabase
    .from("dockitts")
    .select()
    .eq("project", "dockitt");
  return (
    <>
      <main>{dockitts && <DockittKanban dockitts={dockitts} />}</main>
    </>
  );
}
