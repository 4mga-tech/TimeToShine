export default function FormGet2() {
  return (
    <>
      <form className="form-get_in px-16 px-xl-0">
        <div className="form-content-2">
          <div className="tf-grid-layout sm-col-2">
            <fieldset>
              <label
                className="label-text text-body-3 text-white"
                htmlFor="first-name"
              >
                Овог
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="........."
                required
              />
            </fieldset>
            <fieldset>
              <label
                className="label-text text-body-3 text-white"
                htmlFor="last-name"
              >
                Нэр
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="........."
                required
              />
            </fieldset>
          </div>
          <div className="tf-grid-layout sm-col-2">
            <fieldset>
              <label
                className="label-text text-body-3 text-white"
                htmlFor="email"
              >
                И-мэйл
              </label>
              <input type="text" id="email" placeholder="........." required />
            </fieldset>
            <fieldset>
              <label
                className="label-text text-body-3 text-white"
                htmlFor="phone"
              >
                Утас
              </label>
              <input
                type="number"
                id="phone"
                placeholder="........."
                required
              />
            </fieldset>
          </div>
          <fieldset className="d-grid">
            <label
              className="label-text text-body-3 text-white"
              htmlFor="message"
            >
              Мессеж
            </label>
            <textarea id="message"></textarea>
          </fieldset>
        </div>
        <button
          type="submit"
          className="tf-btn text-body-3 style-2 animate-btn animate-dark style-high"
        >
          Илгээх
        </button>
      </form>
    </>
  );
}
