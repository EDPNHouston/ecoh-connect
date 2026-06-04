import WebsiteButton from '../components/WebsiteButton'

function Events() {
  return (
    <section className="page">
      <h1>Upcoming Events</h1>

      <p>
        View ECOH community events, programs, celebrations, and upcoming
        activities through the official ECOH website.
      </p>

      <div className="infoCard">
        <h2>Stay Connected</h2>
        <p>
          Check the ECOH events page regularly for event dates, registration
          details, location updates, and community announcements.
        </p>
      </div>

      <WebsiteButton
        url="https://www.ecohouston.org/events"
        label="Open Events Page"
      />
    </section>
  )
}

export default Events