import { CSSProperties, FC, useEffect, useState } from "react";
import styles from './Phone.module.scss'

export interface PhoneProps {
  /**
   * Phone on or off?
   * 
   * `default: false`
   */
  sleeping?: boolean
  /**
   * Controls whether clicking the power button can control the phones sleep state.
   * 
   * `default: true`
   */
  powerButton?: boolean
  /**
   * Controls speed of animations. Lower value = faster, Higher value = slower.
   * 
   * `default: 0.5`
   */
  animationMultiplier?: number
}
const defaultProps: PhoneProps = {
  sleeping: false,
  powerButton: true,
  animationMultiplier: 0.5 
}

export const Phone: FC<PhoneProps> = (props = {}) => {
  // -> Apply defaults
  props = {
    ...defaultProps,
    ...props
  }

  // -> States
  const [power, setPower] = useState(props.powerButton ?? false)

  // -> Update power state on prop change
  useEffect(() => {
    setPower(props.sleeping ?? false)
  }, [props.sleeping])

  // -> Toggle power state
  const powerState = () => {
    if (!props.powerButton) return
    setPower(!power)
  }

  // -> Parent styles
  const parentStyles = {
    '--animation-multiplier': props.animationMultiplier
  }

  return (
    <div className={styles.Phone} style={parentStyles as CSSProperties}>
      <div className={styles.ButtonLeft1}></div>
      <div className={styles.ButtonLeft2}></div>
      <div className={styles.ButtonRight} onClick={powerState}></div>
      <div className={styles.Camera}><div/></div>
      <div className={styles.Screen}>
        <div 
          className={styles.Power} 
          p-sleeping={power ? 'true' : 'false'}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}