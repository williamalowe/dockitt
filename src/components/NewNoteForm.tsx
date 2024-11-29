"use client";

// import { addDockitt } from "@/actions/dockitts/actions";
// import { useRef } from "react";
import { BiSolidPaperPlane } from "react-icons/bi";

const NewNoteForm = () => {
//   const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="fixed bottom-6 flex gap-x-2">
        <input type="text" placeholder="Enter a message" className="input input-bordered w-[80vw] rounded-full" />
        <button className="btn rounded-full"><BiSolidPaperPlane /></button>
    </div>
  );
};

export default NewNoteForm;
