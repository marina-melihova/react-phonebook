import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pages.module.css';

const Home = () => (
  <div>
    <h1>Phonebook</h1>
    <p>
      <Link className={styles.linkTxt} to="/register">
        Register
      </Link>{' '}
      your account or{' '}
      <Link className={styles.linkTxt} to="/login">
        Log in
      </Link>
    </p>
  </div>
);

export default Home;
