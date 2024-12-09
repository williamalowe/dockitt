"use client"
import { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { Dockitt } from "@/lib/interface";
import { HiFilter } from "react-icons/hi";

export default function KanbanBoard({ dockitts }: {
    dockitts: Dockitt[]
}) {
const [showBacklog, setShowBacklog] = useState(true);
const [showInProgress, setShowInProgress] = useState(true);
const [showUnderReview, setShowUnderReview] = useState(true);
const [showCompleted, setShowCompleted] = useState(true);
const [showCancelled, setShowCancelled] = useState(false);

const handleCheckboxChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  state: (event: boolean) => void
) => {
  state(event?.target.checked);
};

  return (
    <div className="flex-1 flex flex-col gap-y-2">
      <div className="my-4">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn w-32 flex items-center gap-x-6">
          Filters <HiFilter /> 
        </div> 
        <ul
          tabIndex={0}
          className="dropdown-content menu z-20 bg-base-100 rounded-box w-52 p-2 shadow"
        >
          <li>
            <label className="label cursor-pointer">
              <span className="label-text">Backlog</span>
              <input
                type="checkbox"
                checked={showBacklog}
                onChange={(e) => handleCheckboxChange(e, setShowBacklog)}
                className="checkbox"
              />
            </label>
          </li>
          <li>
            <label className="label cursor-pointer">
              <span className="label-text">In Progress</span>
              <input
                type="checkbox"
                checked={showInProgress}
                onChange={(e) => handleCheckboxChange(e, setShowInProgress)}
                className="checkbox"
              />
            </label>
          </li>
          <li>
            <label className="label cursor-pointer">
              <span className="label-text">Under Review</span>
              <input
                type="checkbox"
                checked={showUnderReview}
                onChange={(e) => handleCheckboxChange(e, setShowUnderReview)}
                className="checkbox"
              />
            </label>
          </li>
          <li>
            <label className="label cursor-pointer">
              <span className="label-text">Completed</span>
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={(e) => handleCheckboxChange(e, setShowCompleted)}
                className="checkbox"
              />
            </label>
          </li>
          <li>
            <label className="label cursor-pointer">
              <span className="label-text">Cancelled</span>
              <input
                type="checkbox"
                checked={showCancelled}
                onChange={(e) => handleCheckboxChange(e, setShowCancelled)}
                className="checkbox"
              />
            </label>
          </li>
        </ul>
      </div>
      </div>
      {dockitts && (
        <div className="flex-1 flex flex-col lg:flex-row gap-x-2">
          {
            showBacklog && 
            <KanbanColumn dockitts={dockitts} status={"Backlog"} />
          }
          {
            showInProgress && 
            <KanbanColumn dockitts={dockitts} status={"In Progress"} />
          }
          {
            showUnderReview && 
            <KanbanColumn dockitts={dockitts} status={"Under Review"} />
          }
          {
            showCompleted && 
            <KanbanColumn dockitts={dockitts} status={"Completed"} />
          }
          {
            showCancelled && 
            <KanbanColumn dockitts={dockitts} status={"Cancelled"} />
          }
          
          {/* <KanbanColumn dockitts={dockitts} status={"Backlog"} />
          <KanbanColumn dockitts={dockitts} status={"In Progress"} />
          <KanbanColumn dockitts={dockitts} status={"Under Review"} />
          <KanbanColumn dockitts={dockitts} status={"Completed"} /> */}
        </div>
      )}
    </div>
  );
}
