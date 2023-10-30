import { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import ProductCard from "./ProductCard";
import Loader from "../Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p className="flex mt-40 text-3xl  text-red-800 font-bold justify-center">
          {" "}
          Please wait for Loading......
        </p>
        <div className="flex  justify-center">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-2 container mx-auto gap-8 md:grid-cols-3  mt-10 lg:grid-cols-4 justify-center">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default ProductList;
