import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // const { data: dockitts } = await supabase.from("dockitts").select();

  if (!user) {
    return redirect("/login");
  }
//   testing
  return (
    <main className="flex-1 flex justify-center">
    </main>
  );
}
