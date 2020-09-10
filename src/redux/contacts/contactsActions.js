import { createAction } from '@reduxjs/toolkit';

const addContactStart = createAction('contact/addContactStart');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const fetchContactsStart = createAction('contact/fetchContactsStart');
const fetchContactsSuccess = createAction('contact/fetchContactsSuccess');
const fetchContactsError = createAction('contact/fetchContactsError');

const removeContactStart = createAction('contact/removeContactStart');
const removeContactSuccess = createAction('contact/removeContactSuccess');
const removeContactError = createAction('contact/removeContactError');

const changeFilter = createAction('@contact/changeFilter');

export default {
  addContactStart,
  addContactSuccess,
  addContactError,
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactStart,
  removeContactSuccess,
  removeContactError,
  changeFilter,
};
