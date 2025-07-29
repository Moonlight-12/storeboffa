"use client";

import { useState } from "react";
import ProductList from "../products";
import { supabase } from "@/supabase-client";

export default function HomePage() {

  const [newProduct, setNewProduct] = useState({title: "", description: ""});
  const handleSubmit = async(e: any) => {
    e.preventDefault();

    const {error} = await supabase.from("testProduct").insert(newProduct).single();

    if(error) {
      console.error("Error inserting product:", error);
    }
    
    setNewProduct({title: "", description: ""}); // Reset the form after submission
  }

  return (
    <main>
      <div>navbar</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center items-center">
        <input
        type="text"
        placeholder="Product Title"
        onChange={(e) => 
        setNewProduct((prev) => ({...prev, title: e.target.value}))} />
        
        <input type="text" 
        placeholder="product description"
        onChange={(e) => setNewProduct((prev) => ({...prev, description:e.target.value}))}/>
        <button onClick={() => console.log(newProduct)}>Add Product</button>
      </form>
      <div>
        <ProductList />
      </div>
    </main>
  );
}
