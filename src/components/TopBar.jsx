import '../styles/TopBar.css';
import PropTypes from 'prop-types';

export default function TopBar({ src, title, population }) {
  return (
    <div className="content-wrapper">
      <div className="img-container">
        <img src={src} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>
          population:
          {population}
        </p>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};
