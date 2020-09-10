import axios from 'axios';

axios.defaults.baseURL = 'https://phonebook-29cc9.firebaseio.com';

export const getAllContactsAPI = () => axios.get('/contacts.json');

export const addContactAPI = contact => axios.post('/contacts.json', contact);

export const deleteContactAPI = id => axios.delete(`/contacts/${id}.json`);

export default { getAllContactsAPI, addContactAPI, deleteContactAPI };
