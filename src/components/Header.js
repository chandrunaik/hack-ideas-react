import {useContext} from 'react';
import { AppContext } from "../Contexts/AppContext";

const APP_NAME = "Hack Ideas";

function Header() {
  const {loggedIn, username} = useContext(AppContext);

  const logout = () => {
    localStorage.setItem("loggedIn", false);
    document.location.reload();
  };

  let logoutButton;

  if (loggedIn) {
    logoutButton = (
      <div className="d-flex justify-content-end flex-column">
        <span>
          logged in as: <strong>{username}</strong>
        </span>
        <span onClick={logout}>logout</span>
      </div>
    );
  } else {
    logoutButton = null;
  }

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="navbar-brand">{APP_NAME}</span>
      {logoutButton}
    </nav>
  );
}
export default Header;