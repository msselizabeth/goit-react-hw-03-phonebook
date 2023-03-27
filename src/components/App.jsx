import { Component } from "react"
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import css from './App.module.css'
import initialContacts from './initialContacts.json'


export class App extends Component {
  
 state = {
  contacts: [],
  filter: '',
 }
  
  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
   addContactformSubmit = ({ name, number }) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let prevCont = this.state.contacts.map(({ name }) =>
      name)
    if (prevCont.includes(name)) {
      alert(`${name} is already in contacts`);
      return
    }
    else {
        this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    }
  };
  
    changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterName = () => {
    const { filter, contacts } = this.state;
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
   
    if (contacts) {
      const parseContacts = JSON.parse(contacts);
      this.setState({ contacts: parseContacts })
      return;
    }
    this.setState({contacts: initialContacts})

  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    
  }


  render() {
    const contact = this.getFilterName();
    return (
      <div className={css.appContainer}>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContactformSubmit}/>
        <h2>Contacts:</h2>
        <Filter filter={this.changeFilter}/>
        <ContactList
          contacts={contact}
          onDelete={this.onDelete}
        />
    </div>
  );
  }
  
};
