import { BsArrowRightCircle } from "react-icons/bs";
import "../styles/CountryCard.css";
import { Link } from "react-router-dom";

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
