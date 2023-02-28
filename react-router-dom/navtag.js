import { NavLink } from 'react-router-dom';
<>
  <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : undefined)} to={'/'}>
    소개
  </NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : undefined)} to={'/best'}>
    대표메뉴
  </NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'nav-item nav-active' : undefined)} to={'/couple'}>
    커플메뉴
  </NavLink>
</>;
