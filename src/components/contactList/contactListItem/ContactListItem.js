import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contactsOperations';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove, index }) => {
  return (
    <li className={styles.item} style={{ transitionDelay: `${index * 50}ms` }}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button className={styles.btnDel} type="button" onClick={onRemove}>
        &times;
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = contactsSelectors
    .getContacts(state)
    .find(item => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
