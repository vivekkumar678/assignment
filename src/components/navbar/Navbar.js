import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        
        <a className="active_link" href="#">
          Admin
        </a>
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>

      </div>
      <div className="navbar__right">
        
        <a href="#">
          <i className="fas fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </a>
        <div>
                <h4>Thomas Beown</h4>
                <p>Developer</p>
              </div>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
