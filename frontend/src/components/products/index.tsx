export default function ProductList() {
  let sample_product = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 100 },
    { id: 3, name: "Product 3", price: 100 },
    { id: 4, name: "Product 4", price: 100 },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {sample_product.map((product) => (
        <div
          key={product.id}
          className="relative border p-4 m-6 rounded-xl shadow-lg"
        >
          <div className="w-full flex justify-center p-6">
            Image Placeholder
          </div>
          <h2>{product.name}</h2>
          <p>Price</p>
        </div>
      ))}
    </div>
  );
}
