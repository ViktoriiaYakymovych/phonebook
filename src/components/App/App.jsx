import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Layout } from 'components/Layout';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return toast.error(
        `${newContact.name} is already added to Your contact's list`
      );
    } 
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  filteredContact = e => {
    this.setState({filter: e.target.value});
  }

  normalizedContact = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }

  contactDelete = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }

  render() {
    const {filter} = this.state;
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm addContact={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} filteredContacts={this.filteredContact}/>
          <ContactList contacts={this.normalizedContact()} onDelete={this.contactDelete}/>
        </Section>
        <Toaster/>
      </Layout>
    );
  }
}
