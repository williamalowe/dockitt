"use client";
import { Dockitt } from "@/lib/interface";
import { HiClock, HiMinus, HiPlus } from "react-icons/hi";
import UpdateStatusBtns from "./UpdateStatusBtns";
import { useState } from "react";
import NewDockittForm from "./NewDockettForm";

export default function KanbanColumn({
  dockitts,
  status,
}: {
  dockitts: Dockitt[];
  status: string;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex-1 mt-8">
      <h3 className="text-black/60 flex gap-x-4 font-bold">
        {status}{" "}
        <span className="bg-black/20 aspect-square w-6 text-xs flex items-center justify-center rounded-full">
          {dockitts.filter((dockitt) => dockitt.status === status).length}
        </span>
      </h3>
      <ul className="flex-1 mt-4 flex lg:flex-col max-w-[90vw] overflow-scroll gap-2">
        {dockitts
          .filter((dockitt) => dockitt.status === status)
          .map((dockitt) => (
            <li
              key={dockitt.id}
              className="hover:-rotate-2 transition max-w-96"
            >
              <div className="flex-1 card border-2 border-base-200 rounded-none text-primary-content w-full">
                <div className="card-body">
                  <h2 className="card-title items-start">
                    {dockitt.task}{" "}
                    <span
                      className={`ml-auto text-sm ${
                        dockitt.priority === "Critical" && "text-rose-600"
                      }`}
                    >
                      {dockitt.priority}
                    </span>
                  </h2>

                  <div className="badge badge-ghost">{dockitt.tag}</div>
                  <p>{dockitt.description}</p>
                  <div className="flex">
                    <div className="flex-1 flex flex-col gap-y-2 overflow-wrap">
                      <p className="text-xs">
                        Submitted by:{" "}
                        <span className="font-bold">{dockitt.created_by}</span>
                      </p>
                      <p className="text-xs flex gap-x-2 justify-start items-center">
                        <HiClock />
                        {dockitt.created_at.slice(0, 10)}{" "}
                        {dockitt.created_at.slice(11, 16)}
                      </p>
                    </div>
                    <div className="flex-1 flex items-end justify-end overflow-wrap">
                      <UpdateStatusBtns
                        id={dockitt.id}
                        status={dockitt.status}
                        btnGroup={
                          dockitt.status === "Backlog"
                            ? 1
                            : dockitt.status === "In Progress" ||
                              dockitt.status === "Under Review"
                            ? 2
                            : dockitt.status === "Completed"
                            ? 3
                            : 4
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <button
        onClick={() => setShowForm(!showForm)}
        className="btn btn-neutral w-full mt-2"
      >
        {showForm ? <HiMinus /> : <HiPlus />}
      </button>
      {showForm && (
        <div className="mt-2">
          <NewDockittForm
            status={status}
            selectedProject={dockitts[0].project}
          />
        </div>
      )}
    </div>
  );
}
