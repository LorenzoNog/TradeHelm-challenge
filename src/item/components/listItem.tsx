import React from 'react'
import styles from '../../app/page.module.css'


interface Props{
    onRemove:VoidFunction;
    children: React.ReactNode
}

const ListItem: React.FC<Props> = ({children, onRemove}) => {
  return <li className={styles.li}>
    <span className={styles.span}>{children}</span>
    <button className={styles.buttonDelete} onClick={onRemove}><img src='https://icongr.am/jam/trash-alt-f.svg?size=20&color=ff0000'/></button>
  </li>
}

export default ListItem
