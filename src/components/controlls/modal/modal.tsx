import React from 'react'
import styles from '../../../app/page.module.css'


interface Props{
    onClose: VoidFunction;
    children: React.ReactNode;
}

const Modal: React.FC<Props> = ({children, onClose}) => {
  return (
    <section className={styles.modal} onKeyDown={(e) => e.key === 'Esc' && onClose}>
        <b className={styles.b} onClick={onClose}/>
        <article className={styles.article}>{children}</article>
    </section>
  )
}

export default Modal
