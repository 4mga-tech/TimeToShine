import Layout from "@/src/components/layout/Layout";
import PageTitle from "@/src/components/section/PageTitle";
import ProductCatalog from "@/src/components/product/ProductCatalog";

export default function PageProducts() {
  return (
    <Layout>
      <PageTitle name="БҮТЭЭГДЭХҮҮН" />
      <ProductCatalog />
    </Layout>
  );
}
