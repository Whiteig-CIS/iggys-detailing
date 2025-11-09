import "./../css/Dialog.css";

const PackageDialog = (props) => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                   // Render inside your w3-modal container
<div className="w3-modal" style={{display: isOpen ? 'block' : 'none'}}>
  <div className="package-dialog">
    <button className="dialog-close" onClick={onClose}>×</button>
    <h1 className="dialog-title">{tier}</h1>

    <div className="dialog-grid">
      {/* Left: details */}
      <div>
        <div className="label">Interior Services:</div>
        <ul>
          {interior?.map((s, i) => <li key={`in-${i}`}>{s}</li>)}
        </ul>

        <div className="label">Exterior Services:</div>
        <ul>
          {exterior?.map((s, i) => <li key={`ex-${i}`}>{s}</li>)}
        </ul>

        <div className="price">Price: {price}</div>
      </div>

      {/* Right: 2x3 thumbnails */}
      <div className="thumb-grid">
        {(photos ?? []).slice(0,6).map((src, i) => (
          <div className="thumb" key={i}>
            {src ? <img src={src} alt={`sample ${i+1}`} /> : <span />}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default PackageDialog;