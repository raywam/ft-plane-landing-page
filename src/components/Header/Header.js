import "./Header.css";
import LogoImage from "../../assets/images/LogoImage/LogoImage.svg"

function Header() {
  return <header className="header">
		<img src={LogoImage} className="header-logo" alt="FT Plane"/>
		<div className="header-options">
			<div className="header-option header-option-selected">
				All Flight
			</div>
			<div className="header-option">
				Schedule
			</div>
			<div className="header-option">
				Passengers
			</div>
			<div className="header-option">
				Your Orders
			</div>
			<div className="header-option-button">
				Let's Fly
			</div>
		</div>
	</header>;
}

export default Header;
