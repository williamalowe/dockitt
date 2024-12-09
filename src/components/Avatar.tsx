const Avatar = ({ username }: { username: string | undefined }) => {
  return (
    <>
      <div className="avatar placeholder">
        <div className="bg-ghost border-2 border-neutral text-neutral w-12 rounded-full">
          {username && <span>{username.slice(0, 1)} </span>}
        </div>
      </div>
    </>
  );
};

export default Avatar;
