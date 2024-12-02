import ProjectDropdown from "./ProjectDropdown";

const MobileHeader = ({ currentProject }: {
    currentProject: string
}) => {
  return (
    <header className="p-2">
      <div className="card bg-neutral shadow-xl">
        <div className="card-body">
        <h1 className="text-2xl font-bold text-white/80 capitalize">{currentProject}&apos;s Dockitts</h1>
        <ProjectDropdown />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
