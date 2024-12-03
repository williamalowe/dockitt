"use client"
import { usePathname } from 'next/navigation'

const page = () => {
  const status = usePathname();
  return (
    <div>{status}</div>
  )
}

export default page