"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function addDockitt(formData: FormData) {
  const supabase = await createClient();

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("notes")
    .insert([
      {
        id: Date.now(),
        // created_at: formData.get("task") as string,
        author: data.user.email,
        message: formData.get("tag"),
      },
    ])
    .select();
  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
}