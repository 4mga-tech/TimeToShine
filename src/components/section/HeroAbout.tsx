import Image from "next/image";
import ScrollColorText from "../common/ScrollColorText";

export default function HeroAbout() {
  return (
    <>
      <section className="section-hero-about flat-spacing-2">
        <div className="img-item-1">
          <Image
            loading="lazy"
            width={1296}
            height={606}
            src="/assets/images/item/color-bg-1.png"
            alt="Image"
          />
        </div>
        <div className="img-item-2">
          <Image
            loading="lazy"
            width={1296}
            height={606}
            src="/assets/images/item/pixel-texture.png"
            alt="Image"
          />
        </div>
        <div className="container position-relative z-5">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="sect-title hero-about__intro wow fadeInUp">
                <h2 className="s-title font-3">
                  Танай итгэлт түнш <br />
                  “Ти Эс Ти таусэнт технологи” ХХК
                </h2>
                <p className="s-sub_title">
                  Мэдээллийн технологи, инженерийн найдвартай шийдлийг таны
                  хэрэгцээнд нийцүүлэн хүргэнэ.
                </p>
              </div>
              <div className="image px-16 px-lg-0">
                <Image
                  loading="lazy"
                  width={1078}
                  height={606}
                  src="/assets/images/section/hero-about.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="px-16 px-lg-0">
                {/* <p className="text-caption caption font-2 text-main-2">
                  ABOUT QORE
                </p> */}
                <div className="rate-per">
                  <Image
                    loading="lazy"
                    width={90}
                    height={16}
                    src="/assets/images/item/star-rate.png"
                    alt="Image"
                  />
                  <p className="text-main-3">
                    <span className="fw-bold text-main-5">(4.9/</span>.5.0)
                  </p>
                </div>
                <h5 className="title-2 text-linear-2 font-3">
                  10000 гаруй хэрэглэгчдийн итгэлийг хүлээсэн <br />
                </h5>
                <div className="brand-wrap mb-lg-0">
                  <Image
                    loading="lazy"
                    width={41}
                    height={16}
                    src="/assets/images/brand/brand_1.png"
                    alt="Brand"
                  />
                  <Image
                    loading="lazy"
                    width={81}
                    height={16}
                    src="/assets/images/brand/brand_2.png"
                    alt="Brand"
                  />
                  <Image
                    loading="lazy"
                    width={70}
                    height={16}
                    src="/assets/images/brand/brand_1.png"
                    alt="Brand"
                  />
                  <Image
                    loading="lazy"
                    width={74}
                    height={16}
                    src="/assets/images/brand/brand_2.png"
                    alt="Brand"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <ScrollColorText className="h4 font-3 px-16 px-lg-0 hero-about__statement">
                Хувь хүн болон аж ахуйн нэгж, албан байгууллагын үйл ажиллагааны
                хэрэгцээ шаардлагад нийцсэн программ хангамж, тоног төхөөрөмжийн
                нийлүүлэлт, угсралт, суурилуулалт, тохиргоо, техникийн дэмжлэг,
                засвар үйлчилгээ болон системийн шийдлийг цогцоор нь хүргэн
                ажилладаг.
              </ScrollColorText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
