import Layout from "@/src/components/layout/Layout";
import StoreComingSoon from "@/src/components/service/StoreComingSoon";
import PageTitle from "@/src/components/section/PageTitle";

export default function StorePage() {
    return (
        <Layout>
            <PageTitle name="ДЭЛГҮҮР" />
            <StoreComingSoon />
        </Layout>
    );
}
