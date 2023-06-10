import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
    <div className="container">
      <div className="row">
        {/* Columna 1 */}
        <div className="col">
          <h4>Metro Movies</h4>
          <h1 className="list-unstyled">
            <li>Dirección</li>
            <li>Distribuidor Universidad</li>
            <li>Av. Boyacá con autopista Petare-Guarenas.Urbanización Terrazas del Ávila</li>
          </h1>
        </div>
        {/* Columna 2 */}
        <div className="col">
          <h4>Communicate With Us!</h4>
          <ui className="list-unstyled">
            <li>comunicaciones@unimet.edu.ve</li>
            
          </ui>
        </div>
        {/* Columna 3 */}
        <div className="col">
          <h4>Find Us!</h4>
          <ui className="list-unstyled">
            <li>Paraninfo</li>
            <li>Auditorio Polar</li>
            <li>Auditorio Francesca Pensieri</li>
            <li>And More!</li>
          </ui>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Metro Movies | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
  )
}
