import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <>
        <footer classname={styles.footer}>
            <h3>Plataforma para desenvolvedores que tem o espirito livre!</h3>
            <p>Nomade Developers &copy; 2024</p>
        </footer>
    </>
  )
}

export default {Footer};