import type { AppProps } from 'next/app'
import Navbar from 'components/Navbar'

import 'global/index.scss'
import styles from 'scss/_app.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.Parent}>
      <Navbar />
      <div className={styles.Component}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
