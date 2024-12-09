import Header from "@/components/Header";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen p-2 flex gap-2">
        <Sidebar currentProject={"wayfarer"} />
        <div className="flex-1 flex flex-col">
          <Header currentProject={"wayfarer"} />
          <div className="flex items-center">
          <MobileNav currentProject={"wayfarer"} />
            <div className="ml-auto lg:hidden">
            <Logo />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
