import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { CSSTransition } from 'react-transition-group';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import { contactsSelectors, contactsOperations } from '../redux/contacts';
import ContactForm from '../components/contactForm/ContactForm';
import Notification from '../components/notification/Notification';
import fadeRightStyles from './fadeRight.module.css';
import zoomStyles from './zoom.module.css';

class Contacts extends Component {
  state = {
    showError: false,
  };

  existContact = () => {
    this.setState({
      showError: true,
    });
  };

  componentDidMount() {
    this.props.onFetchContacts();
  }

  componentDidUpdate() {
    if (this.state.showError) {
      this.turnOffErrorTimeout = setTimeout(() => {
        this.setState(() => ({ showError: false }));
      }, 1500);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.turnOffErrorTimeout);
  }

  render() {
    const { showError } = this.state;
    const { isLoadingContacts, contacts, error } = this.props;
    return (
      <>
        {error && <Notification message={error.message} />}
        <CSSTransition
          in={showError}
          timeout={250}
          classNames={fadeRightStyles}
          unmountOnExit
        >
          <Notification message="This name already exists!" />
        </CSSTransition>

        <ContactForm onExistContact={this.existContact} />
        <CSSTransition
          in={contacts.length > 1}
          timeout={250}
          classNames={zoomStyles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        {isLoadingContacts && (
          <Loader
            styles={{ textAlign: 'center' }}
            type="ThreeDots"
            color="#00BFFF"
            height={20}
            width={50}
          />
        )}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingContacts: contactsSelectors.isLoadingContacts(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
