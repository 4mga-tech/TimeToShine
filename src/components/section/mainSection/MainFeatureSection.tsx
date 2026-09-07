"use client";
import { FeatureTabItems } from "@/src/data/feature";
import Image from "next/image";
import { useState } from "react";

export default function MainFeatureSection() {
  const [activeTab, setActiveTab] = useState("codeComposer");

  return (
    <>
      <div className="sect-main flat-animate-tab">
        <div className="s-img_item wow bounceInScale">
          <Image
            src="/assets/images/section/smoke-blue.webp"
            alt="Item"
            width={1296}
            height={606}
          />
        </div>
        <div className="container">
          <div className="sect-title wow fadeInUp">
            <h2 className="s-title font-3">Бид хэрхэн ажилладаг вэ</h2>
            <p className="s-sub_title">
              Бид хэрэглэгчийн бодит хэрэгцээг судалж, шинэлэг технологийн
              шийдлээр тэдний үйл ажиллагааны үр ашгийг нэмэгдүүлдэг.
              <br className="d-none d-lg-block" />
              Ингэснээр салбарын хөгжилд бодит хувь нэмэр оруулж, урт хугацааны
              найдвартай түншлэл, тогтвортой өсөлтийг бий болгодог.{" "}
            </p>
          </div>
          <div className="tab-content">
            {FeatureTabItems.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className={`tab-pane ${activeTab === item.id ? "active show" : ""}`}
                role="tabpanel"
              >
                <div className="image-with-text">
                  <Image
                    src={`/assets/images/section/${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    width={1617}
                    height={909}
                  />
                  <div className="sect-title box-text">
                    <h4 className="s-title">{item.title}</h4>
                    <p className="s-sub_title text-body-3">
                      {item.desc.split(" — ")[0]}
                      <br className="d-none d-lg-block" />—{" "}
                      {item.desc.split(" — ")[1]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="br-line"></span>
        <div className="container">
          <div className="position-relative">
            <ul className="tab-can_do position-relative mx-1" role="tablist">
              {FeatureTabItems.map((item) => (
                <li
                  key={item.id}
                  className={`nav-tab-item ${activeTab === item.id ? "active" : ""}`}
                  role="presentation"
                >
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`btn_tab tf-btn style-transparent text-body-3 animate-btn ${
                      activeTab === item.id ? "active" : ""
                    }`}
                    role="tab"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
            <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
            <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
          </div>
        </div>
      </div>
    </>
  );
}
