import { MdArrowBackIosNew, MdKeyboardVoice } from 'react-icons/md';
import { GoGear } from 'react-icons/go';
import '../styles/Navigation.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navigation({ children }) {
  const navigate = useNavigate();
  return (
    <header>
      <div className="back-button">
        <MdArrowBackIosNew
          onClick={() => navigate(-1)}
          className="header-icons"
        />
      </div>
      {children}
      <div className="header-menu">
        <MdKeyboardVoice className="header-icons" />
        <GoGear className="header-icons" />
      </div>
    </header>
  );
}

Navigation.defaultProps = {
  children: <></>,
};
Navigation.propTypes = {
  children: PropTypes.node,
};
