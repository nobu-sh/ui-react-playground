import styles from 'scss/index.module.scss'
import Image from 'next/image'

import ui from 'static/mockup-ui.png'

export default function Index() {
  return (
    <div className={styles.Index}>
      <div className={styles.info}>
        {/* <h1><span className={styles.react}>React</span> UI</h1> */}
        <h1><span className={styles.react}>UI/UX</span> Playground &</h1>
        <h1><span>Design</span> Mockups</h1>
        <br />
        <p>Seamless UI/UX playground by <a href="https://nobu.sh/">Nobu</a> providing inspiration from mockups and other random ideas!</p>
        <p className={styles.license}>Project is licensed under <a href="https://opensource.org/licenses/MIT">MIT</a></p>
        <br />
        <br />
        <button>
          Random
        </button>
      </div>
      <div className={styles.image}>
        <Image src={ui} alt='' quality={100}/>
      </div>
    </div>
  );
}
