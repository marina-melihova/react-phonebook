import { createAction } from '@reduxjs/toolkit';

const registerStart = createAction('auth/registerStart');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginStart = createAction('auth/loginStart');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutStart = createAction('auth/logoutStart');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserStart = createAction('auth/getCurrentUserStart');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

export default {
  registerStart,
  registerSuccess,
  registerError,
  logoutStart,
  logoutSuccess,
  logoutError,
  loginStart,
  loginSuccess,
  loginError,
  getCurrentUserStart,
  getCurrentUserSuccess,
  getCurrentUserError,
};
