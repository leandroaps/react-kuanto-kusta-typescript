import '../styles/Header.scss';

import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const Header: React.FC = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <img src={logo} className="logo" alt="logo" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/products" className="nav-link px-2 link-secondary">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link px-2 link-secondary">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
