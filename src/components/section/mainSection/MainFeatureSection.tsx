"use client";

import { FeatureTabItems } from "@/src/data/feature";
import Image from "next/image";
import { useState } from "react";

export default function MainFeatureSection() {
  const [activeTab, setActiveTab] = useState(() => FeatureTabItems[0]?.id ?? "");
  return <div className="sect-main flat-animate-tab">
    <div className="s-img_item wow bounceInScale"><Image src="/assets/images/section/smoke-blue.webp" alt="" width={1296} height={606} /></div>
    <div className="container">
      <div className="sect-title wow fadeInUp"><h2 className="s-title font-3">Бид хэрхэн ажилладаг вэ</h2><p className="s-sub_title">Бид таны бодит хэрэгцээнд тулгуурлан технологийн шийдлийг төлөвлөж, хэрэгжүүлж, тасралтгүй дэмжинэ.</p></div>
      <div className="position-relative"><ul className="tab-can_do position-relative mx-1" role="tablist">{FeatureTabItems.map((item) => <li key={item.id} className={`nav-tab-item ${activeTab === item.id ? "active" : ""}`} role="presentation"><button onClick={() => setActiveTab(item.id)} className={`btn_tab tf-btn style-transparent text-body-3 animate-btn ${activeTab === item.id ? "active" : ""}`} role="tab" aria-selected={activeTab === item.id}>{item.title}</button></li>)}</ul></div>
      <div className="tab-content solution-showcase-content">{FeatureTabItems.map((item) => <div key={item.id} className={`tab-pane ${activeTab === item.id ? "active show" : ""}`} role="tabpanel"><div className="solution-showcase">
        <div className="solution-showcase__intro"><span className="solution-showcase__icon" aria-hidden="true">{item.icon}</span><div><p className="text-caption font-2 text-main-5">TST SOLUTIONS</p><h3 className="font-3 h3">{item.title}</h3><p>{item.summary}</p></div></div>
        <div className="solution-showcase__features">{item.features.map((feature, index) => <article key={feature.title}><span>0{index + 1}</span><h4 className="font-3 h6">{feature.title}</h4><p>{feature.text}</p></article>)}</div>
        <div className="solution-showcase__tags">{item.tags.map((tag) => <span key={tag}>● {tag}</span>)}</div>
      </div></div>)}</div>
    </div><span className="br-line" />
  </div>;
}
