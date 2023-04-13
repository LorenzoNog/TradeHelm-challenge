import React from 'react'
import styles from '../../../app/page.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    colorScheme?: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({children, colorScheme ='secondary', ...props}) => {
  return (
    <button className={`${styles.button} ${styles[colorScheme]}`} {...props}>
        {children}
    </button>
  )
}

export default Button
