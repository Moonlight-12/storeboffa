export default function ProductDetails({params}: {params: {productId: string}}) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Product Details for {params.productId}</h1>
      {/* Additional product details can be added here */}
    </div>
  );

}