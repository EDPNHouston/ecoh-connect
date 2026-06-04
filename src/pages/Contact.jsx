import WebsiteButton from '../components/WebsiteButton'

function Contact() {
  return (
    <section className="page">
      <h1>Contact ECOH</h1>

      <p>
        Contact the Ethiopian Community Organization in Houston for questions,
        support, membership, events, volunteering, or general information.
      </p>

      <div className="infoCard">
        <h2>Get in Touch</h2>
        <p>
          Use the official ECOH contact page to send your message directly to
          the organization.
        </p>
      </div>

      <WebsiteButton
        url="https://www.ecohouston.org/contact"
        label="Open Contact Page"
      />
    </section>
  )
}

export default Contact