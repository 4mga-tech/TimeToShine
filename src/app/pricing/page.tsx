import Layout from "@/src/components/layout/Layout";
import ContractedItService from "@/src/components/service/ContractedItService";
import PageTitle from "@/src/components/section/PageTitle";

export default function ContractedItPage() {
    return (
        <Layout>
            <PageTitle name="ГЭРЭЭТ IT" />
            <ContractedItService />
        </Layout>
    );
}
