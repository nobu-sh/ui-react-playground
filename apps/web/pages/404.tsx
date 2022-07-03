import Link from 'next/link'
import styles from 'scss/_error.module.scss'

export default function FourOFour() {
  return <div className={ styles.Error }>
    <h1>4<span>😭</span>4</h1>
    <h2>OOPS! NOTHING WAS FOUND</h2>
    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.&nbsp;
      <Link href='/'>
        <a>Return to homepage!</a>
      </Link>
    </p>
  </div>
}