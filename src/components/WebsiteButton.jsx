function WebsiteButton({ url, label }) {
  function openWebsite() {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button className="websiteButton" onClick={openWebsite}>
      {label}
    </button>
  )
}

export default WebsiteButton