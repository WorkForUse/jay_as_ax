import { Link, Outlet, useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate()

  return (
    <>
        {/* ///// */}
        <button
          type="button"
          className="btn btn-dark"
          style={{ display: 'block', margin: 'auto', width: '200px' }} onClick={()=>navigate(-1)}>Back</button>
        {/* ///// */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <ul className="navbar-nav d-flex flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="btn btn-dark"
        style={{ display: 'block', margin: 'auto', width: '200px' }}
        onClick={() => navigate('/contact')}>Go to Content Page</button>

      {/* Route content yahan render hoga */}
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default App;
