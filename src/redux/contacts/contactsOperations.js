import contactsActions from './contactsActions';
import api from '../../api/api';

const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactStart());
  try {
    const { data, config } = await api.addContactAPI(contact);
    dispatch(
      contactsActions.addContactSuccess({
        id: data.name,
        ...JSON.parse(config.data),
      }),
    );
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsStart());
  try {
    const { data } = await api.getAllContactsAPI();
    const keys = Object.keys(data);
    const items = [];
    for (const key of keys) {
      const contact = { id: key, ...data[key] };
      items.push(contact);
    }
    dispatch(contactsActions.fetchContactsSuccess(items));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

const removeContact = id => async dispatch => {
  dispatch(contactsActions.removeContactStart());
  try {
    await api.deleteContactAPI(id);
    dispatch(contactsActions.removeContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.removeContactError(error));
  }
};

export default { addContact, fetchContacts, removeContact };
