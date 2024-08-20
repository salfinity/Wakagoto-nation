import getBillboard from "/actions/get-billboard";
import getProducts from "/actions/get-products";
import ProductList from "/src/components/product-list";
import Billboard from "/src/components/ui/billboard";
import Container from "/src/components/ui/container";

import ModalProvider from "/providers/modal-provider";
import ToastProvider from "/providers/toast-provider";

export const metadata = {
  title: "Iqra Biashara E-Store",
  description:
    "This an e-commerce platform that connects the muslim community.",
};

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("ed3b339c-fca8-477a-9dd7-c7cb211f0180");

  return (
    <div className="w-full">
      <ToastProvider />
      <ModalProvider />
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
