import { Anton_SC } from "next/font/google"

const headerFont = Anton_SC({
    weight: '400',
    subsets: ['latin']
})

const Logo = () => {
  return (
    <h5 className={`${headerFont.className} text-4xl tracking-wide`}>
        <span className="text-6xl">D</span>ockitt.
    </h5>
  )
}

export default Logo