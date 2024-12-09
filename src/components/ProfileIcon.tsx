const ProfileIcon = ({ username }: { username: string | undefined }) => {
  return (
    <div className="flex gap-x-2 items-center overflow-clip">
      {/* <div className="ml-4 avatar justify-start online placeholder ">
        <div className="bg-secondary text-neutral-content w-12 rounded-full">
          {username && <span className="text-xl">{username.slice(0, 1)}</span>}
        </div>
      </div> */}
      <div className="w-full text-sm ml-4">
        <p className="text-sm">Welcome back,</p>
        <p className="font-bold">{username}</p>
      </div>
    </div>
  );
};

export default ProfileIcon;
