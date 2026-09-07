import FormGet2 from "../form/FormGet2";

export default function GetSection() {
  return (
    <>
      <section className="section-get-in flat-spacing-3">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-10 mx-auto">
              <h2 className="s-title only-title font-3 text-linear px-16 px-xl-0">
                Get in touch
              </h2>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ul className="info-us-list px-16 px-lg-0 mb-lg-0">
                <li>
                  <p className="title-sub text-body-3">Office</p>
                  <a
                    href="https://maps.app.goo.gl/wVVNQTjnvrceh4sw9"
                    target="_blank"
                    className="text-body-3 link text-white"
                  >
                    Монгол улс, Улаанбаатар хот, Баянгол, 1-р хороо, МҮИС 9
                    давхар, 919 тоот
                  </a>
                </li>
                <li className="br-line has-dot"></li>
                <li>
                  <p className="title-sub text-body-3">Email</p>
                  <a
                    href="mailto:info@tst.mn"
                    className="h5 fw-medium link text-white font-3"
                  >
                    info@tst.mn
                  </a>
                </li>
                <li className="br-line has-dot"></li>
                <li>
                  <p className="title-sub text-body-3">Phone</p>
                  <a
                    href="tel:3035550105"
                    className="h5 fw-medium link text-white font-3"
                  >
                    +976 99662482
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <FormGet2 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
