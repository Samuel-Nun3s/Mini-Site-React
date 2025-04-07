import React from "react";

import styles from './Pages.module.css';

function Home() {
  return (
    <section className={styles.section}>
      <div>
        <h1>You are on the page Home</h1>
      </div>
      <div>
        <h3>React Curiosities</h3>
      </div>
      <p>
        React was developed by Facebook in 2011 to improve user experience and make code easier to maintain. It was open-sourced in 2013.
      </p>
    </section>
  )
}

export default Home;
