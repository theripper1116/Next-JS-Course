const ProductDetails = ({
  params,
}: {
  params: {
    productDetails: string;
  };
}) => {
  return <h1>product details page for product {params.productDetails}</h1>;
};
export default ProductDetails;
