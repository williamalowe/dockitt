"use client";

import { addNote } from "@/actions/notes/actions";
import { useRef } from "react";
import { BiSolidPaperPlane } from "react-icons/bi";

const NewNoteForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form className="flex gap-x-2 z-20"       ref={ref}
    action={async (noteData) => {
      await addNote(noteData);
      ref.current?.reset();
    }}>
        <input type="text" id="message" name="message" placeholder="Enter a message" className="input input-bordered w-[80vw] rounded-full" />
        <button className="btn rounded-full"><BiSolidPaperPlane /></button>
    </form>
  );
};

export default NewNoteForm;
