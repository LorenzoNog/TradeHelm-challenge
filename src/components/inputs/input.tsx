import React from 'react'
import styles from '../../app/page.module.css'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className={styles.input} type='text' {...props}></input>
}

export default Input