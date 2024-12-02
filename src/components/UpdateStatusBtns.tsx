"use client";

import {
  deleteDockitt,
  updateDockittStatusBackwards,
  updateDockittStatusCancelled,
  updateDockittStatusForward,
} from "@/actions/dockitts/actions";
import {
  BsCaretLeftFill,
  BsCaretRightFill,
  BsCheck,
  BsTrash2,
  BsX,
} from "react-icons/bs";

const UpdateStatusBtns = ({
  id,
  status,
  btnGroup,
}: {
  id: number;
  status: string;
  btnGroup: number;
}) => {
  return (
    <>
      {btnGroup === 1 ? (
        <div className="card-actions justify-end">
          <button
            className="btn btn-xs lg:btn-sm hover:bg-red-500"
            onClick={() => updateDockittStatusCancelled({ id: id })}
          >
            {" "}
            <BsTrash2 />
          </button>
          <button
            className="btn btn-xs lg:btn-sm text hover:bg-green-500"
            onClick={() =>
              updateDockittStatusForward({ id: id, currentStatus: status })
            }
          >
            <BsCaretRightFill />
          </button>
        </div>
      ) : btnGroup === 2 ? (
        <div className="card-actions justify-end">
          <button
            className="btn btn-xs lg:btn-sm hover:bg-red-500"
            onClick={() => updateDockittStatusCancelled({ id: id })}
          >
            <BsX />
          </button>
          <button
            className="btn btn-xs lg:btn-sm hover:bg-amber-500"
            onClick={() =>
              updateDockittStatusBackwards({ id: id, currentStatus: status })
            }
          >
            <BsCaretLeftFill />
          </button>
          <button
            className="btn btn-xs lg:btn-sm hover:bg-green-500"
            onClick={() =>
              updateDockittStatusForward({ id: id, currentStatus: status })
            }
          >
            <BsCaretRightFill />
          </button>
        </div>
      ) : (
        <div className="card-actions justify-end">
          <button
            className="btn btn-xs lg:btn-sm hover:bg-amber-500"
            onClick={() =>
              updateDockittStatusBackwards({ id: id, currentStatus: status })
            }
          >
            <BsCaretLeftFill />
          </button>
          <button
            className="btn btn-xs lg:btn-sm hover:bg-green-500"
            onClick={() => deleteDockitt({ id: id })}
          >
            <BsCheck />
          </button>
        </div>
      )}
    </>
  );
};

export default UpdateStatusBtns;
