"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function addNote(noteData: FormData) {
  const supabase = await createClient();

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { error } = await supabase
      .from("notes")
      .insert([
        {
          id: Date.now(),
          author: user.email,
          message: noteData.get("message"),
        },
      ])
      .select();
    if (error) {
      throw new Error(error.message);
    }
  }
  revalidatePath("/");
}
