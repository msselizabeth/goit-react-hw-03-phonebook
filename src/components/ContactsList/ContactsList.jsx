import PropTypes from 'prop-types';
import css from './ContactList.module.css'


export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
          {contacts.map(
              ({ id, name, number }) => {
                  return (
                      <li key={id} className={css.item}>
                          <p className={css.text}>{name}: {number}</p>
                          <button className={css.deleteBtn} type='button' onClick={() => onDelete(id)}>Удалить</button>
                      </li>
                  )
              }
          )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};