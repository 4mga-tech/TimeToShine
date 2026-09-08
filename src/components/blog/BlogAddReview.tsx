export default function BlogAddReview() {
  return (
    <>
      <div className="blog-detail_add_review">
        <h4 className="title text-linear font-3">Leave a Reply</h4>
        <p className="sub-title">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="form-review">
          <div className="form-content">
            <div className="tf-grid-layout sm-col-2">
              <fieldset>
                <label className="text-body-3 text-white" htmlFor="first-name">
                  Овог
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="John"
                  required
                />
              </fieldset>
              <fieldset>
                <label className="text-body-3 text-white" htmlFor="last-name">
                  Нэр
                </label>
                <input type="text" id="last-name" placeholder="Doe" required />
              </fieldset>
            </div>
            <div className="tf-grid-layout sm-col-2">
              <fieldset>
                <label className="text-body-3 text-white" htmlFor="email">
                  И-мэйл
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                />
              </fieldset>
              <fieldset>
                <label className="text-body-3 text-white" htmlFor="phone">
                  Утас
                </label>
                <input
                  type="number"
                  id="phone"
                  placeholder="(303) 555-0105"
                  required
                />
              </fieldset>
            </div>
            <fieldset className="d-grid">
              <label className="text-body-3 text-white" htmlFor="message">
                Мессеж
              </label>
              <textarea id="message" placeholder="Message"></textarea>
            </fieldset>
          </div>
          <button
            type="submit"
            className="tf-btn text-body-3 style-2 animate-btn animate-dark style-high"
          >
            Илгээх
          </button>
        </form>
      </div>
    </>
  );
}
