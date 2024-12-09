"use client";

import { addDockitt } from "@/actions/dockitts/actions";
import { useRef } from "react";

const NewDockittForm = ({ selectedProject, status }: {
  status: string,
  selectedProject: string
}) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className="flex flex-col outline-none items-center gap-2"
      ref={ref}
      action={async (formData) => {
        await addDockitt(formData);
        ref.current?.reset();
      }}
    >
      <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
        <input type="text" className="grow" placeholder="Enter Dockitt Title" id="task" name="task" required/>
        <input type="text" className="hidden" id="project" name="project" readOnly value={selectedProject} />
        <input type="text" className="hidden" id="status" name="status" readOnly value={status} />
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        defaultValue={"Low"}
        id="priority" name="priority" 
        required
      >
        <option value="Low">
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
        <input type="text" className="grow" placeholder="Tag (optional)" id="tag" name="tag"/>
      </label>
      <textarea
        className="textarea textarea-bordered w-full max-w-xs"
        placeholder="Dockitt Description"
        id="description" name="description"
      ></textarea>
      <button type="submit" className="btn btn-neutral hover:scale-110 transition">
        Add Dockitt
      </button>
    </form>
  );
};

export default NewDockittForm;
