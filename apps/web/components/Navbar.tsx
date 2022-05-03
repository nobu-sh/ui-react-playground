import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from 'scss/Navbar.module.scss'

import icon from 'static/favicon.png'

interface Route {
  name: string
  path: string
}
export const routes: Route[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Mockups',
    path: '/mockups'
  },
]

export default function Navbar() {
  const router = useRouter()

  return (
    <div className={styles.Navbar}>
      <div className={styles.child}>
        <Image 
          className={styles.ico} 
          src={icon} 
          alt=''
          width={40}
          height={40}
        />
        {/* <h1>Nobu</h1> */}
        <div className={styles.items}>
          {
            routes.map((item, i) => (
              <Link href={item.path} key={i}>
                <a do-accent={ router.pathname === item.path ? 'true' : 'false' }>{item.name}</a>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}