import { MdArrowBackIosNew, MdKeyboardVoice } from "react-icons/md";
import { GoGear } from "react-icons/go";
import "../styles/Navigation.css";
export default function Navigation(props) {
  return (
    <header>
      <div className="back-button">
        <MdArrowBackIosNew className="header-icons" />
      </div>
      {props.children}
      <div className="header-menu">
        <MdKeyboardVoice className="header-icons" />
        <GoGear className="header-icons" />
      </div>
    </header>
  );
}
