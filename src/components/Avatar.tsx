const Avatar = ({ username }: { username: string | undefined }) => {
  return (
<div className="ml-4 avatar online placeholder">
  <div className="bg-primary text-neutral-content w-16 rounded-full">
    <span className="text-xl">{username}</span>
  </div>
</div>
  );
};

export default Avatar;
