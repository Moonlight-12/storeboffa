import ProductList from "@/components/products";

export default function explore() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Explore Products   </h1>
            {/* Additional explore content can be added here */}
            <div className="p-6">
                <ProductList />
            </div>
        </div>  
    );
}