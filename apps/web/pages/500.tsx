import Link from 'next/link'
import styles from 'scss/_error.module.scss'

export default function FiveHundred() {
  return <div className={ styles.Error }>
    <h1>5<span>😭</span><span>😭</span></h1>
    <h2>OOPS! SOMETHING BROKE</h2>
    <p>Something went wrong server side while attempting to load the page you accessed.&nbsp;
      <Link href='/'>
        <a>Return to homepage!</a>
      </Link>
    </p>
  </div>
}