import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <header className="hero">
        <img
          className="ecohLogo"
          src={`${import.meta.env.BASE_URL}images/ecoh-logo.png`}
          alt="ECOH Logo"
        />

        <h1>ECOH Connect</h1>
        <p>A simple community app for Ethiopians in Houston.</p>
      </header>

      <main className="actions">
        <Link className="actionButton green" to="/membership">
          Join / Renew Membership
        </Link>

        <Link className="actionButton yellow" to="/events">
          Upcoming Events
        </Link>

        <Link className="actionButton red" to="/volunteer">
          Volunteer Signup
        </Link>

        <Link className="actionButton dark" to="/request-help">
          Request Community Help
        </Link>

        <Link className="actionButton green" to="/donate">
          Donate
        </Link>

        <Link className="actionButton gray" to="/contact">
          Contact ECOH
        </Link>
      </main>

      <footer className="homeFooter">
        <p>Ethiopian Community Organization in Houston</p>
      </footer>
    </>
  )
}

export default Home