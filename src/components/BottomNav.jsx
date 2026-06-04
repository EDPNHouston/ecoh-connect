import { NavLink } from 'react-router-dom'

function BottomNav() {
  return (
    <nav className="bottomNav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? 'navItem activeNavItem' : 'navItem'
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive ? 'navItem activeNavItem' : 'navItem'
        }
      >
        Events
      </NavLink>

      <NavLink
        to="/membership"
        className={({ isActive }) =>
          isActive ? 'navItem activeNavItem' : 'navItem'
        }
      >
        Join
      </NavLink>

      <NavLink
        to="/request-help"
        className={({ isActive }) =>
          isActive ? 'navItem activeNavItem' : 'navItem'
        }
      >
        Help
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'navItem activeNavItem' : 'navItem'
        }
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default BottomNav