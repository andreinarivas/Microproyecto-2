import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        {/* Columna 1 */}
        <div className={styles.col}>
          <h4>Metro Movies</h4>
          <ul className="list-unstyled">
            <li>Dirección</li>
            <li>Distribuidor Universidad</li>
            <li>Av. Boyacá con autopista Petare-Guarenas. Urbanización Terrazas del Ávila</li>
          </ul>
        </div>
        {/* Columna 2 */}
        <div className={styles.col}>
          <h4>Communicate With Us!</h4>
          <ul className="list-unstyled">
            <li>comunicaciones@unimet.edu.ve</li>
          </ul>
        </div>
        {/* Columna 3 */}
        <div className={styles.col}>
          <h4>Find Us!</h4>
          <ul className="list-unstyled">
            <li>Paraninfo</li>
            <li>Auditorio Polar</li>
            <li>Auditorio Francesca Pensieri</li>
            <li>And More!</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <p className={styles.copyright}>
          &copy;{new Date().getFullYear()} Metro Movies | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </footer>
  )
}
