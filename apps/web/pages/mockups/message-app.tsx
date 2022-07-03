import { CSSProperties, FC } from 'react';
import styles from 'scss/mockups/message-app.module.scss'
import { Phone } from 'components'
import wallpaper from '../../assets/message-app/wallpaper.jpg'
import { Battery } from 'icons/battery';
import { Network } from 'icons/network';
import { Wifi } from 'icons/wifi';

export default function MessageApp() {


  return (
    <div className={styles.MessageApp}>
      <Phone sleeping={false} animationMultiplier={0.5}>
        <AndroidContainer wallpaperPath={wallpaper.src}>
          <AndroidAppBar providerText="nobu" />
          <AndroidLockScreen />
        </AndroidContainer>
      </Phone>
    </div>
  )
}

{/* <p>- Screen starts off</p>
<p>- Animate into lock screen</p>
<p>- Animate into unlock screen</p>
<p>- Type passcode 0000</p>
<p>- Animate into home screen</p>
<p>- Click message app animate into</p>
<p>- Click first contact</p>
<p>- Have contact an bot talk back and forth</p>
<p>- Unlock animation state for use to play with</p> */}

export interface AndroidAppBarProps {
  providerText: string
}
const AndroidAppBar: FC<AndroidAppBarProps> = (props) => {
  return (
    <div className={styles.AndroidAppBar}>
      <div className={styles.AppBarContent}>
        <div className={styles.AppBarLeft}>
          <p className={`Small ${styles.AppBarProvider}`}>{props.providerText}</p>
        </div>
        <div className={styles.AppBarRight}>
          {/* <p>fgewrjio</p> */}
          <Wifi />
          <Network />
          <br />
          <div className={styles.AppBarPower}>
            <p className="ExtraSmall">75%</p>
            <Battery />
          </div>
        </div>
      </div>
    </div>
  )
}

interface AndroidContainerProps {
  wallpaperPath: string
}
const AndroidContainer: FC<AndroidContainerProps> = (props) => {
  const parentStyles: CSSProperties = {
    backgroundImage: `url("${props.wallpaperPath}")`
  }

  return (
    <div className={styles.AndroidContainer} style={parentStyles}>
      {props.children}
    </div>
  )  
}

const AndroidLockScreen: FC = () => {
  return (
    <div className={styles.AndroidLockScreen}>

    </div>
  )
}
