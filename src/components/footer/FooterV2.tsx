import { FooterBody } from "./Footer";

export default function FooterV2() {
  return (
    <>
      <footer className="tf-footer">
        <div className="container">
          <div className="has-hafl_plus">
            <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
            <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
          </div>
        </div>
        <span className="br-line"></span>
        <div className="sect-bottom">
          <div className="container">
            <div className="box-hacker has-overlay_linear mx-1">
              <p className="hacker-text text-caption font-2 text-uppercase hackerText">
                TST компани нь мэдээллийн технологи, инженерийн дэвшилтэт
                шийдлийг нэг дороос хүргэх зорилготойгоор байгуулагдсан бөгөөд
                веб болон мобайл аппликейшн хөгжүүлэлт, программ хангамжийн
                загварчлал, системийн интеграци, дэд бүтцийн шийдэл, кибер
                аюулгүй байдал зэрэг үндсэн чиглэлүүдээр цогц үйлчилгээ үзүүлэн
                ажиллаж байна.
              </p>
            </div>
          </div>
        </div>
        <span className="br-line"></span>
        {/* <div className="footer-body">
                    <div className="container">

                    </div>
                </div> */}

        <FooterBody />
      </footer>
    </>
  );
}
