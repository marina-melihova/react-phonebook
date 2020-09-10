import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from './contactListItem/ContactListItem';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import fadeStyles from './fade.module.css';

const ContactList = ({ items }) => {
  const countItems = items.length;
  const timeout = 250 + 50 * (countItems - 1);
  return (
    <TransitionGroup component="ul">
      {items.map((item, index) => (
        <CSSTransition key={item.id} timeout={timeout} classNames={fadeStyles}>
          <ContactListItem id={item.id} index={index} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => ({
  items: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
