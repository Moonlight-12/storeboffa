export default async function ProductDetails(props: {params: Promise<{productId: string}>}) {
  const params = await props.params;
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Product Details for {params.productId}</h1>
      {/* Additional product details can be added here */}
    </div>
  );
}