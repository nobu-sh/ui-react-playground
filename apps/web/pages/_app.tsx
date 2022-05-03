import type { AppProps } from 'next/app'
import Navbar from 'components/Navbar'

import 'global/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="Parent">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
