import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ProductList() {
  let sample_product = [
    {
      id: 1,
      name: "Post Archive Faction 5.0 Jacket Right - Purple",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 2,
      name: "Sage Nation Box Pleat Denim Shorts",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 3,
      name: "Product 3",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 4,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 5,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 6,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 7,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 8,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 9,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 10,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 11,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 12,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
    {
      id: 13,
      name: "Product 4",
      price: 100,
      image: "/clothe.png",
      Currency: "AUD",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
      {sample_product.map((product) => (
        <div key={product.id} className="relative p-4 rounded-xl ">
          <div className="aspect-square bg-gray-50 flex items-center justify-center rounded-lg mb-4 relative">
            <Link href={`/explore/${product.id}`}>
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  fill
                  placeholder="blur"
                  blurDataURL={product.image}
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="text-gray-300">No Image</div>
              )}
            </Link>
          </div>

          <div className="ml-2">
            <h3 className={`font-bold text-md mb-2 ${montserrat.className}`}>
              {product.name}
            </h3>
            <p
              className={`text-gray-700 font-semibold ${montserrat.className}`}
            >
              {product.Currency} {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
