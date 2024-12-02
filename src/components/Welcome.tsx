import { createClient } from "@/utils/supabase/server";

export default async function Welcome() {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user && (
      <div className="flex-1 flex items-center gap-x-2 justify-end">
        <h5>
          Welcome, <span className="font-bold">{user.email}</span>
        </h5>
        {/* <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-12 rounded-full">
            <span className="text-xl">{user.email?.slice(0,1)}</span>
          </div>
        </div> */}
      </div>
    )
  }
