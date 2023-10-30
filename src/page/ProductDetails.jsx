import { useState } from "react";
import commerce from "../lib/commerce";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Loader from "../Loader";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  commerce.products.retrieve(params.id).then((product) => {
    setProduct(product);
    setIsLoading(false);
  });

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
    <Layout>
      <div>
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product.image?.url}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{product.name}</h1>
              <div
                className="py-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <button className="btn btn-primary">Add To Card</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
