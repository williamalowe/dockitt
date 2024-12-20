import NewNoteForm from "@/components/NewNoteForm";
import { createClient } from "@/utils/supabase/server";

export default async function NotesPage() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <main className="flex-1 flex flex-col items-center">
      <ul className="mb-20 lg:mb-0">
        {notes?.map((note) => (
          <li key={note.id}>
            <div className="chat chat-start">
              <div className="chat-header">
                {note.author}
                <time className="text-xs opacity-50 ml-4">
                  {note.created_at.slice(0, 10)} {note.created_at.slice(11, 16)}
                </time>
              </div>
              <div className="chat-bubble">
                <p>{note.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-6 ">
        <NewNoteForm />
      </div>
    </main>
  );
}
