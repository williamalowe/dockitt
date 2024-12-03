import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  // const { data: dockitts } = await supabase.from("dockitts").select();
  return (
    <main className="flex flex-col justify-center">
    </main>
  );
}
