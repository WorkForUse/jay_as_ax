
const Sidebar = ({selectedTabProp , setSelectedTabProp}) => {

  const HandleSelectPage = (tabName) => {
    setSelectedTabProp(tabName)
  }

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px",height:'100vh' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4 d-flex align-items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/2345/2345321.png" alt="logo" width={50} />
          <h5 className="fw-lighter fst-italic">Puzzleton</h5>
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => HandleSelectPage("Home")}>
          <a href="#" className={`nav-link text-white ${selectedTabProp === "Home" && "active"}`} aria-current="page">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li onClick={() => HandleSelectPage("CreatePost")}>
          <a href="#" className={`nav-link text-white ${selectedTabProp === "CreatePost" && "active"}`}>
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;