import Link from "next/link";

export default function StoreComingSoon() {
    return (
        <section className="section-store-coming-soon flat-spacing-2">
            <div className="container">
                <div className="store-coming-soon__content">
                    <p className="text-caption font-2 text-main-5">ДЭЛГҮҮР</p>
                    <span className="store-coming-soon__mark" aria-hidden="true"><i className="icon icon-ShoppingBag"></i></span>
                    <h2 className="font-3 text-linear">Coming Soon</h2>
                    <p className="text-body-1">Дэлгүүрийн үйл ажиллагаа удахгүй нээгдэнэ.</p>
                    <Link href="/" className="tf-btn text-body-3 style-2 animate-btn animate-dark">Буцах</Link>
                </div>
            </div>
        </section>
    );
}
