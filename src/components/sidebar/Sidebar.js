import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Artemis</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
       
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Discover    </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">User      </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-align-justify"></i>
          <a href="#">Documents  </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Applications</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-file"></i>
          <a href="#">Pages</a>
        </div>
        <h2>SECONDERY</h2>
        <div className="sidebar__link">
          <i className="fa fa-question-circle"></i>
          <a href="#">Support Center</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-inbox"></i>
          <a href="#">Inbox</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-folder-open"></i>
          <a href="#">File Manager</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-list"></i>
          <a href="#">Data List</a>
        </div>
        
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          <a href="#">Setting</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
