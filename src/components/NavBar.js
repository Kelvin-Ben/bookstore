/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="left">
        <h1 className="title">Bookstore CMS</h1>
        <ul className="list">
          <CustomLink to="/" className="links">BOOKS</CustomLink>
          <CustomLink to="/Categories" className="links">CATEGORIES</CustomLink>
        </ul>
      </div>
      <button type="submit" className="btn--user">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="user">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
      </button>
    </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        { children }
      </Link>
    </li>
  );
}
