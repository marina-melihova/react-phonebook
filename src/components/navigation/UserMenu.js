import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authActions } from '../../redux/auth';
import styles from './Navigation.module.css';

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>{email}</span>
    <button className="btn" type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

export default connect(mapStateToProps, {
  onLogout: authActions.logoutSuccess,
})(UserMenu);
