import WebsiteButton from '../components/WebsiteButton'

function RequestHelp() {
  return (
    <section className="page">
      <h1>Request Community Help</h1>

      <p>
        ECOH provides community support and helps connect families with
        available resources when possible.
      </p>

      <div className="infoCard">
        <h2>Support Areas</h2>
        <p>Legal support</p>
        <p>Healthcare navigation</p>
        <p>Housing support</p>
        <p>Job and community resource guidance</p>
      </div>

      <WebsiteButton
        url="https://www.ecohouston.org/programs/legal-support/apply"
        label="Open Help Request Page"
      />
    </section>
  )
}

export default RequestHelp