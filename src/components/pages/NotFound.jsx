import React from "react";

import styles from './Pages.module.css';

function NotFound() {
  return (
    <section className={styles.section}>
      <div>
        <h1>NotFound... 404!</h1>
      </div>
      <div>
        <h3>It seems you took the wrong path</h3>
      </div>
    </section>
  )
} 

export default NotFound;
