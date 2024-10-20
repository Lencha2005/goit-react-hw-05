import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import clsx from 'clsx';
import css from './Navigation.module.css'

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <header className={styles.header}> 
        <NavLink className={buildCssClasses} to='/'>Home</NavLink>
        <NavLink className={buildCssClasses} to='/movies'>Movies</NavLink>
    </header>
  )
}

export default Navigation