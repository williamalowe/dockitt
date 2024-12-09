// import { BsPlus, BsX } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import NewDockittForm from "./NewDockettForm";

const NewDockittModal = ({ selectedProject, status }: {
  status: string,
  selectedProject: string
}) => {
  return (
    <>
      <label htmlFor="my_modal_7" className="btn btn-neutral rounded-full"><HiPlus /> Add New Dockitt</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <NewDockittForm selectedProject={selectedProject} status={status} />
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
    </>
  );
};

export default NewDockittModal;
