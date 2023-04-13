import React from 'react'
import styles from '../../app/page.module.css'


interface Props{
    children: React.ReactNode
}
const List:React.FC<Props> = ({children}) => {
  return <ul className={styles.ul}>{children}</ul>
}

export default List
