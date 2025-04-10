import React from "react";

import useLoading from "../../hooks/useLoading";

import Loading from "../layout/Loading";

import styles from './Pages.module.css';

function About() {

  const isLoading = useLoading();

  return (
    <>
      {isLoading ? 
        <Loading /> : (
        <section className={styles.section}>
          <div>
            <h1>You are on the page About</h1>
          </div>
          <div>
            <h3>React Curiosities</h3>
          </div>
          <p>
            React uses a concept called Virtual DOM, which updates only the elements that actually changed, making UI updates much faster.
          </p>
        </section>
      )}
    </>
  )
}

export default About;