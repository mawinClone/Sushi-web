import "./Navbar.css";
// import logo from './logo.svg';

import sushiIcon from "../asset/sushi-icon.png";
// "./Images/sushi-icon.png"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-con">
            <div className="logo">
            <img src={sushiIcon} alt="logo" />
                <p>Sushi Web</p>
            </div>
            
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
