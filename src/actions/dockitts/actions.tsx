"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function addDockitt(formData: FormData) {
  const supabase = await createClient();

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: { user },
  } = await supabase.auth.getUser();

const { error } = await supabase
.from("dockitts")
.insert([
  {
    id: Date.now(),
    task: formData.get("task") as string,
    status: 'Backlog',
    priority: formData.get("priority") as string,
    tag: formData.get("tag") as string,
    description: formData.get("description") as string
  },
])
.select();
  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
}
