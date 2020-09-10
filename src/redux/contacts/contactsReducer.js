import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const addContact = (state, action) => [action.payload, ...state];
const removeContact = (state, action) =>
  state.filter(item => item.id !== action.payload);

const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsStart]: () => true,
  [contactsActions.addContactStart]: () => true,
  [contactsActions.removeContactStart]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.removeContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsStart]: () => null,
  [contactsActions.addContactStart]: () => null,
  [contactsActions.removeContactStart]: () => null,
  [contactsActions.addContactError]: (_, action) => action.payload,
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.removeContactError]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter,
  loading,
  error,
});
