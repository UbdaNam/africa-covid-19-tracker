import { BsArrowRightCircle } from 'react-icons/bs';
import '../styles/CountryCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CountryCard({ flags, name }) {
  return (
    <div className="country-card">
      <Link to={`/${name.common.toLowerCase()}`}>
        <img src={flags.svg} alt={`${name.common} falg`} />
        <div className="overlay-container">
          <BsArrowRightCircle className="forward-icon" />
          <h3>{name.common}</h3>
        </div>
      </Link>
    </div>
  );
}

CountryCard.propTypes = {
  name: PropTypes.shape({
    common: PropTypes.string.isRequired,
  }).isRequired,
  flags: PropTypes.shape({
    svg: PropTypes.string.isRequired,
  }).isRequired,
};
