import Breadcrumbs from "@components/shared/Breadcrumbs";

const Products: React.FC = () => {
  let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "shopAll", href: "/products" },
  ];

  return (
    <div>
      <Breadcrumbs items={faqBreadcrumbs} />
      
    </div>
  );
};

export default Products;
