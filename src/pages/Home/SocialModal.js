function SocialModal({ isOpen, onClose, socialLinks }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-backdrop">
        <div className="modal-content">
          <button onClick={onClose}>Close</button>

        <div className="social-icons">
        {socialLinks.map(({ name, url, icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={icon} alt={name} style={{ width: 48, height: 48 }} />
            </a>
        ))}
        </div>

        </div>
      </div>
    );
  }

  export default SocialModal;
  