/**
 * ArticleModal — static HTML shell. Always in the DOM (via layout.tsx),
 * hidden by default. InteractiveScript populates and opens it on card click.
 */
export function ArticleModal() {
  return (
    <div
      className="modal-overlay"
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal" role="document">

        {/* Left: image + thumbnails */}
        <div className="modal__left">
          <div className="modal__main-img" id="modal-main-img" />
          <div className="modal__thumbs">
            <div className="modal__thumb is-active" />
            <div className="modal__thumb" />
            <div className="modal__thumb" />
            <div className="modal__thumb" />
          </div>
        </div>

        {/* Right: content */}
        <div className="modal__right">
          <div className="modal__right-top">
            <button className="modal__close-btn" id="modal-close-btn" aria-label="Close">×</button>
            <p className="modal__date" id="modal-date" />
            <h2 className="modal__title" id="modal-title" />
            <div className="modal__impact" id="modal-impact">
              <span className="impact-dot" id="modal-impact-dot" />
              <span className="modal__impact-label" id="modal-impact-label" />
            </div>
            <p className="modal__metric" id="modal-metric" />
          </div>

          <div className="modal__right-body">
            <div className="modal__section">
              <p className="modal__section-head">Synopsis</p>
              <p className="modal__section-body" id="modal-synopsis" />
            </div>
            <div className="modal__section">
              <p className="modal__section-head">Key Takeaways</p>
              <ul className="modal__list modal__list--plus" id="modal-takeaways" />
            </div>
            <div className="modal__section">
              <p className="modal__section-head">Primary Sources</p>
              <ul className="modal__list" id="modal-sources" />
            </div>
            <div className="modal__section">
              <p className="modal__section-head">Sectors Implicated</p>
              <div className="modal__sectors" id="modal-sectors" />
            </div>
          </div>

          <div className="modal__right-foot">
            <a href="#" className="modal__cta" id="modal-cta">Read article →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
