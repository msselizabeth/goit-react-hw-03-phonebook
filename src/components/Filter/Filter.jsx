import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({filter}) => {
    return (
        <label className={css.label}>
            Find contacts by name 
            <input type="text" onChange={filter} className={css.input}/>
        </label>
    )
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
}