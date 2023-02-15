
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Spotlight from "../components/membership.js";

export default function Home() {
  return (
    <>
          <Spotlight/>
    </>
  )
}
