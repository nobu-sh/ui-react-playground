import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from 'scss/Navbar.module.scss'

import icon from 'static/favicon.png'
import Arrow from 'icons/arrow'

interface Route {
  name: string
  path: string
  disabled?: true
}
export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
    disabled: true
  },
  {
    name: 'Mockups',
    path: '/mockups'
  },
]

export default function Navbar() {
  const router = useRouter()
  const backBar = (router.pathname.split('/')[1] === 'mockups' && router.pathname.split('/')[2]) ? true : false

  return (
    <div className={styles.Navbar}>
      <div
        className={styles.child}
        is-disabled={`${backBar}`}
      >
        <Image 
          className={styles.ico} 
          src={icon} 
          alt=''
          layout='raw'
        />
        {/* <h1>Nobu</h1> */}
        <div className={styles.items}>
          {
            routes.map((item, i) => (
              <Link href={item.path} key={i}>
                <a 
                  do-accent={ router.pathname === item.path ? 'true' : 'false' }
                  is-disabled={ item.disabled ? 'true' : 'false' }
                >{item.name}</a>
              </Link>
            ))
          }
        </div>
      </div>
      <div
        className={styles.backBar}
        is-disabled={`${!backBar}`}
      >
        <div className={styles.backButton} onClick={() => router.push('/mockups')}>
          <Arrow />
          <p>Mockups</p>
        </div>
      </div>
    </div>
  )
}