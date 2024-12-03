import ProjectDropdown from "./ProjectDropdown";
import ThemeSwitcher from "./ThemeSwitcher";

const MobileHeader = ({ currentProject }: {
    currentProject: string
}) => {
  return (
    <header className="relative w-full bg-neutral pt-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white/80 capitalize">{currentProject}&apos;s Dockitts</h1>
        <ProjectDropdown />
        <div className="absolute top-2 right-2">
          <ThemeSwitcher />
        </div>
    </header>
  );
};

export default MobileHeader;
