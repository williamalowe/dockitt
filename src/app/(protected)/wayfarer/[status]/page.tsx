"use client";
import { usePathname } from "next/navigation";

const StatusPage = () => {
  const status = usePathname();
  return <div>{status}</div>;
};

export default StatusPage;
