import WebsiteButton from '../components/WebsiteButton'

function Donate() {
  return (
    <section className="page">
      <h1>Donate to ECOH</h1>

      <p>
        Your donation helps ECOH serve the Ethiopian community in Houston
        through programs, events, outreach, and community assistance.
      </p>

      <div className="infoCard">
        <h2>Support the Mission</h2>
        <p>
          Donations help support community programs, cultural events, family
          assistance, youth activities, and operational needs.
        </p>
      </div>

      <WebsiteButton
        url="https://www.ecohouston.org/donate"
        label="Open Donation Page"
      />
    </section>
  )
}

export default Donate