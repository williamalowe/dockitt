import DockittList from "@/components/DockittList";
import { createClient } from "@/utils/supabase/server";

export default async function StatusPage() {
  const supabase = await createClient();

  const { data: dockitts } = await supabase
    .from("dockitts")
    .select()
    .eq("project", "wayfarer");
  return <div>{dockitts && <DockittList dockitts={dockitts} />}</div>;
}
