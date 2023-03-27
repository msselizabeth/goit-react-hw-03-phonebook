import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

const STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {

 state = { ...STATE };

    loginInputName = nanoid();
    loginInputnumber = nanoid();

    handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
      this.setState({ ...STATE });
  };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 className={css.nameTitle}>Name</h2>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={this.loginInputName}
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <h2 className={css.numberTitle}>Number</h2>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={this.loginInputnumber}
                    onChange={this.handleChange}
                    value={this.state.number}
                />
                <button type='submit' className={css.addButton}>Добавить контакт</button>

            </form>
        )
    }
}