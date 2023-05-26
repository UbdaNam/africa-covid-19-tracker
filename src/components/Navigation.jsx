import { MdArrowBackIosNew, MdKeyboardVoice } from "react-icons/md";
import { GoGear } from "react-icons/go";
import "../styles/Navigation.css";
import { useNavigate } from "react-router-dom";

export default function Navigation(props) {
  const navigate = useNavigate();
  return (
    <header>
      <div className="back-button">
        <MdArrowBackIosNew
          onClick={() => navigate(-1)}
          className="header-icons"
        />
      </div>
      {props.children}
      <div className="header-menu">
        <MdKeyboardVoice className="header-icons" />
        <GoGear className="header-icons" />
      </div>
    </header>
  );
}
