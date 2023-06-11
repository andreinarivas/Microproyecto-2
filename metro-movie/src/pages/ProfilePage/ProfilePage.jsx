import React from 'react'
import styles from './ProfilePage.module.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import ReservaCard from '../../components/ReservaCard/ReservaCard'

export default function ProfilePage() {
  return (
    <div className={styles.profile}>
        <h1 className={styles.title}>Bienvenido, Nombre</h1>
        <h2 className={styles.movies}>Tus Películas Favoritas</h2>
        <div className={styles.movie_show}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <h2 className={styles.reserves}> Reservas Hechas</h2>
        <div className={styles.reserve_slides}> 
        <ReservaCard/>
        <ReservaCard/> 
        </div>


    </div>
  )
}
