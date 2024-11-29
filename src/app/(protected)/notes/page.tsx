import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { BiSolidPaperPlane } from "react-icons/bi";

export default async function NotesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: notes } = await supabase.from("notes").select();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex-1 flex flex-col items-center">
      <ul>
        {notes?.map((note) => (
          <li key={note.id}>
            <div className="chat chat-start">
              <div className="chat-header">
                {note.author}
                <time className="text-xs opacity-50 ml-4">{note.created_at.slice(0,10)} {note.created_at.slice(11,16)}</time>
              </div>
              <div className="chat-bubble">
                <h5>{note.title}</h5>
                <p>{note.message}</p>
                </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-6 flex gap-x-2">
        <input type="text" placeholder="Enter a message" className="input input-bordered w-[80vw] rounded-full" />
        <button className="btn rounded-full"><BiSolidPaperPlane /></button>
      </div>
    </main>
  );
}
