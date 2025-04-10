import React from "react";

import useLoading from "../../hooks/useLoading";

import Loading from '../layout/Loading.jsx';

import styles from './Pages.module.css';

function Contact() {

  const isLoading = useLoading();

  return (
    <>
      {isLoading ? 
        <Loading /> : (
        <section className={styles.section}>
          <div>
            <h1>You are on the page Contact</h1>
          </div>
          <div>
            <h3>React Curiosities</h3>
          </div>
          <p>
            One of React's core principles is dividing the interface into reusable components, which makes it easier to maintain and scale large projects.
          </p>
          </section>
      )}
    </>
  )
}

export default Contact;