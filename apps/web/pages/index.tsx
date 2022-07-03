import styles from 'scss/index.module.scss'
import Image from 'next/image'

import ui from 'static/mockup-ui-2.png'

export default function Index() {
  return (
    <div className={styles.Index}>
      <div className={styles.info}>
        {/* <h1><span className={styles.react}>React</span> UI</h1> */}
        <h1 className="Large"><span className={styles.react}>UI/UX</span> Playground &<br /><span>Design</span> Mockups</h1>
        <br />
        <p className="Large">Seamless UI/UX playground by <a href="https://nobu.sh/">Nobu</a> providing inspiration from mockups and other random ideas!</p>
        <p className={styles.license}>Project is licensed under <a href="https://opensource.org/licenses/MIT">MIT</a></p>
        <br />
        <br />
        <button>
          Random
        </button>
      </div>
      <div className={styles.image}>
        <div>
          <Image src={ui} alt='' quality={100} layout={'fill'} objectFit={'contain'} objectPosition='center right' />
        </div>
      </div>
    </div>
  );
}
