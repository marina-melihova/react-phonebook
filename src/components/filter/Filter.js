import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import styles from './Filter.module.css';

const Filter = ({ onChangeFilter, value }) => {
  const changeFilter = e => onChangeFilter(e.target.value);
  return (
    <div className={styles.wrapper}>
      <label>
        Find contacts by name
        <input type="text" onChange={changeFilter} value={value} />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
