import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../navigation/UserMenu';
import AuthNav from '../navigation/AuthNav';
import { authSelectors } from '../../redux/auth';
import styles from './Header.module.css';

const Header = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
