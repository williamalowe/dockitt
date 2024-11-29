import NewDockittForm from "./NewDockettForm";

const NewDockittModal = () => {
  return (
    <>
      <label htmlFor="my_modal_6" className="fixed bottom-4 right-[calc(50%-14rem)] btn btn-primary w-full max-w-md">
        New Dockitt
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-center capitalize mb-2 text-2xl font-bold">
            Add new Dockitt
          </h3>
          <NewDockittForm />
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDockittModal;
