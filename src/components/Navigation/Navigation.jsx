import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}> 
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
    </header>
  )
}

export default Navigation