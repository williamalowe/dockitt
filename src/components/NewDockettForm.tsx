"use client";

import { addDockitt } from "@/actions/dockitts/actions";
import { useRef } from "react";

const NewDockittForm = () => {
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
        <input type="text" className="grow" placeholder="Enter Task" id="task" name="task" required/>
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        defaultValue={"Low"}
        id="priority" name="priority" 
        required
      >
        <option value="Low" disabled>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
        <input type="text" className="grow" placeholder="Tag" id="tag" name="tag"/>
      </label>
      <textarea
        className="textarea textarea-bordered w-full max-w-xs"
        placeholder="Description"
        id="description" name="description"
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Add Dockitt
      </button>
    </form>
  );
};

export default NewDockittForm;
