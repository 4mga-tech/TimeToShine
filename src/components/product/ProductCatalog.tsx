"use client";

import { Product, products } from "@/src/data/products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function matchesQuery(product: Product, query: string) {
  const searchableText = [
    product.name,
    product.category,
    product.description,
    product.details,
    ...product.features,
    ...product.specifications.flatMap((spec) => [spec.label, spec.value]),
  ]
    .join(" ")
    .toLowerCase();
  return searchableText.includes(query.toLowerCase().trim());
}

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const filteredProducts = useMemo(
    () => products.filter((product) => matchesQuery(product, query)),
    [query],
  );

  useEffect(() => {
    if (!selectedProduct) return;
    const scrollY = window.scrollY;
    const previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setSelectedProduct(null);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      Object.assign(document.body.style, previousBodyStyles);
      window.scrollTo(0, scrollY);
    };
  }, [selectedProduct]);

  return (
    <section className="section-page-blog flat-spacing-2 product-catalog">
      <div className="container">
        <div className="content-1200">
          <div className="product-catalog__toolbar">
            <div>
              <p className="text-body-3">Хяналтын камер</p>
              <h2 className="font-3 h3 text-linear">Бүтээгдэхүүний төрөл</h2>
            </div>
            <label className="product-search" htmlFor="product-search">
              <i className="icon icon-MagnifyingGlass" aria-hidden="true"></i>
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Бүтээгдэхүүн хайх..."
              />
            </label>
          </div>
          {filteredProducts.length ? (
            <>
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <button
                    className="product-card hover-img"
                    type="button"
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`View details for ${product.name}`}
                  >
                    <span className="product-card__image img-style">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, (max-width: 1199px) 33vw, 20vw"
                      />
                    </span>
                    <span className="product-card__content">
                      <span className="product-card__category text-body-3">
                        {product.category}
                      </span>
                      <span className="product-card__name font-3 h5">
                        {product.name}
                      </span>
                      <span className="product-card__description">
                        {product.description}
                      </span>
                      <span className="product-card__price text-body-1">
                        {product.price}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              {/* <div className="product-catalog__action">
                <Link
                  href="/use-case-detail"
                  className="tf-btn text-body-3 style-2 animate-btn animate-dark"
                >
                  Бүгдийг үзэх
                </Link>
              </div> */}
            </>
          ) : (
            <p className="product-empty text-body-1">No products found</p>
          )}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <div
      className="product-modal"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="product-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Close product details"
        >
          <i className="icon-close"></i>
        </button>
        <div className="product-modal__image">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className="product-modal__content">
          <div className="product-modal__category-row">
            <span className="product-card__category text-body-3">
              {product.category}
            </span>
          </div>
          <h2 id="product-modal-title" className="font-3 h3 text-linear">
            {product.name}
          </h2>
          <p className="product-modal__price text-body-1">{product.price}</p>
          <p>{product.description}</p>
          <p>{product.details}</p>
          <div className="br-line has-dot"></div>
          <h5 className="font-3">Гол онцлогууд</h5>
          <ul className="product-features">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h5 className="font-3">Үзүүлэлтүүд</h5>
          <dl className="product-specifications">
            {product.specifications.map((specification) => (
              <div key={specification.label}>
                <dt>{specification.label}</dt>
                <dd>{specification.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
