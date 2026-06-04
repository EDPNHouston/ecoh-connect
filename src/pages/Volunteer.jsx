import WebsiteButton from '../components/WebsiteButton'

function Volunteer() {
  return (
    <section className="page">
      <h1>Volunteer Signup</h1>

      <p>
        ECOH depends on volunteers to support community events, programs,
        outreach, and services.
      </p>

      <div className="infoCard">
        <h2>Volunteer Opportunities</h2>
        <p>Help with events, registration, setup, cleanup, outreach, media, youth programs, and community support.</p>
        <p>
          High school students and others who need volunteer hours may also
          request volunteer service confirmation.
        </p>
      </div>

      <WebsiteButton
        url="https://www.ecohouston.org/contact"
        label="Contact ECOH to Volunteer"
      />
    </section>
  )
}

export default Volunteer