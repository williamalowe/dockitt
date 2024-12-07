import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      {/*  */}
      {/* Normal View */}
      {/*  */}
      <div className="hidden min-h-screen lg:flex flex-col">
        <div className="fixed z-30 w-full">
          <Header currentProject="wayfarer" />
        </div>
        <div className="flex-1 flex">
          <div className="fixed z-30 top-[80px]">
            <Sidebar currentProject="wayfarer" />
          </div>
          <div className="ml-[80px] mt-[80px] flex-1 p-2">{children}</div>
        </div>
      </div>
      {/*  */}
      {/* Mobile View */}
      {/*  */}
      <div className="flex flex-col min-h-screen lg:hidden">
        <div className="fixed z-30 w-full top-0">
          <MobileHeader currentProject="wayfarer" />
        </div>
        <div className="mb-[64px] mt-[104px]">{children}</div>
        <div className="fixed bottom-0 w-full">
          <MobileNav currentProject="wayfarer" />
        </div>
      </div>
    </>
  );
}
