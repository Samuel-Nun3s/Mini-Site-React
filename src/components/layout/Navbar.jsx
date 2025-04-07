import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Mini Site</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
