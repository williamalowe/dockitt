import { BsPlus, BsX } from "react-icons/bs";
import NewDockittForm from "./NewDockettForm";

const NewDockittModal = ({ selectedProject }: {
  selectedProject: string
}) => {
  return (
    <>
      <label htmlFor="my_modal_6" className="z-20 btn aspect-square text-xl hover:scale-110 transition">
        <BsPlus />
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle " />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-center capitalize mb-2 text-2xl font-bold">
            Add new Dockitt
          </h3>
          <NewDockittForm selectedProject={selectedProject}/>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn aspect-square text-xl hover:scale-110 transition">
              <BsX />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDockittModal;
