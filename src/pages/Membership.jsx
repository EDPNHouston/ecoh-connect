import WebsiteButton from '../components/WebsiteButton'

function Membership() {
  return (
    <section className="page">
      <h1>Join / Renew Membership</h1>

      <p>
        Become an ECOH member or renew your annual membership through the
        official ECOH website.
      </p>

      <div className="infoCard">
        <h2>Membership Options</h2>
        <p>
          <strong>Individual Membership:</strong> $60 per year
        </p>
        <p>
          <strong>Family Membership:</strong> $100 per year
        </p>
      </div>

      <WebsiteButton
        url="https://www.ecohouston.org/signup"
        label="Open Membership Page"
      />
    </section>
  )
}

export default Membership