import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const isLoadingContacts = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getContacts,
  isLoadingContacts,
  getFilter,
  getError,
  getFilteredContacts,
};
